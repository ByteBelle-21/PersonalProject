const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const mysql = require('mysql2');
const upload = multer({ storage: multer.memoryStorage() });


var database = mysql.createConnection({
  host: 'mysql-image',
  user: 'root',
  password: 'abcdefgh'
 
});


database.connect((error) => {
  if (error) {
      console.error('Error connecting to the database:', error);
      if (error.code === 'ECONNREFUSED') {
          console.error('Database connection refused. Exiting application.');
          process.exit(1); 
      }
  } else {
      console.log('Connected to the database.');
      createDatabase();
  }
});


async function createDatabase(){
    database.query(`CREATE DATABASE IF NOT EXISTS Cscommunity`, async(error, result)=>{
        if (error){
            console.error('Error while creating the database: ',error);
            return;
        }
        console.log('Successfully created database Cscommunity');
        useDatabase();
    })
}

function useDatabase(){
    database.query(`USE Cscommunity`,async(error,result)=>{
        if(error){
            console.error('Error while accessing the database: ',error);
            return;
        }
        console.log('Successfully accessed database Cscommunity');
        createUserTable();
       
    })
}


function createUserTable(){
    //skills JSON,
    database.query(`CREATE TABLE IF NOT EXISTS userTable 
                        (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                        username VARCHAR(50) NOT NULL, 
                        email VARCHAR(100) NOT NULL,
                        password VARCHAR(100) NOT NULL,
                        name VARCHAR(100)  NOT NULL, 
                        occupation VARCHAR(100)  NOT NULL,
                        skills TEXT  NOT NULL,
                        avatar VARCHAR(200)  NOT NULL,
                        totalPosts INT  NOT NULL,
                        likes INT  NOT NULL)`,(error,result)=>{
                            if (error){
                                console.error('Error while creating the table userTable: ',error);
                                return;
                            }
                            console.log('Successfully created table userTable');
                        })
}


app.post('/signup', (request, response) => {
    const input_username = request.body.signupUsername;
    const input_email = request.body.signupEmail;
    const input_password = request.body.signupPassword;
    const input_name = request.body.signupName;
    const input_occupation = request.body.signupOccupation;
    const input_skills = request.body.skills;
    const input_avatar = request.body.signupAvatar;
    database.query(`SELECT * FROM userTable WHERE email=?`,[input_email],(error,result)=>{
        if(error){
            response.status(500).send("Server error during sign up1");
            return;
        }
        else{
            if(result.length!==0){
                response.status(401).send("Provided email is already associated with other account");
                
            }
            else{
                database.query(`SELECT * FROM userTable WHERE username=?`,[input_username],(error,result)=>{
                    if(error){
                        response.status(500).send("Server error during sign up2");
                        return;
                    }
                    else{
                        if(result.length!==0){
                            response.status(401).send("Provided username is already associated with someone's account. Try other username");
                            
                        }
                        else{
                            database.query(`INSERT INTO userTable (username,email,password,name,occupation,skills,avatar,totalPosts,likes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,[input_username, input_email,input_password,input_name, input_occupation, input_skills,input_avatar,0,0],(error,result)=>{
                                if(error){
                                    response.status(500).send("Server error during sign up3 :");
                                    return;
                                }
                                else{
                                    response.status(200).send("Successfully signed up")
                                }
                            })
                        }

                    }
                })
            }
        }
    })

});



app.post('/login', (request, response) => {
    const input_username = request.body.loginUsername;
    const input_password = request.body.loginPassword;
    database.query(`SELECT * FROM userTable WHERE username=?`,[input_username],(error,result)=>{
        if(error){
            response.status(500).send("Server error during sign up1");
            return;
        }
        else{
            if(result.length===0){
                response.status(401).send("Provided username is not associated with any account");
                
            }
            else{
                database.query(`SELECT * FROM userTable WHERE username=? and password=?`,[input_username,input_password],(error,result)=>{
                    if(error){
                        response.status(500).send("Server error during sign up2");
                        return;
                    }
                    else{
                        if(result.length===0){
                            response.status(401).send("Wrong password.Try again");
                            
                        }
                        else{
                            response.status(200).send("Successfully logged in");
                        }
                        
                    }
                })
            }
        }
    })

});




app.listen(PORT, () => {
    console.log('server is running on port ' + PORT + ".");
});