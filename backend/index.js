const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const mysql = require('mysql2');

var database = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    port: 3306,
    password: 'abcd1234'
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
        createPostsTable();
        createFilesTable();
        createChannelsTable();
        createMessagesTable();
        createLikesTable();
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

function createPostsTable(){
    database.query(`CREATE TABLE IF NOT EXISTS postsTable 
                        (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        replyTo INT ,
                        username INT,
                        likes INT,
                        datetime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, 
                        post VARCHAR(1000) NOT NULL,
                        channel INT)`,(error,result)=>{
                            if (error){
                                console.error('Error while creating the table postsTable: ',error);
                                return;
                            }
                            console.log('Successfully created table postsTable');
                        })
}


function createFilesTable(){
    database.query(`CREATE TABLE IF NOT EXISTS filesTable 
                        (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        filename VARCHAR(255) NULL,
                        filetype VARCHAR(50) NULL,
                        filedata LONGBLOB NULL,
                        postId INT,
                        messageId INT)`,(error,result)=>{
                            if (error){
                                console.error('Error while creating the table filesTable: ',error);
                                return;
                            }
                            console.log('Successfully created table filesTable');
                        })
}


function createChannelsTable(){
    database.query(`CREATE TABLE IF NOT EXISTS channelsTable 
                        (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        username INT,
                        channel VARCHAR(500) NOT NULL,
                        totalpeople INT NULL,
                        totalposts INT NULL)`,(error,result)=>{
                            if (error){
                                console.error('Error while creating the table channelsTable: ',error);
                                return;
                            }
                            console.log('Successfully created table channelsTable');
                        })
}


function createMessagesTable(){
    database.query(`CREATE TABLE IF NOT EXISTS messagesTable 
                        (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                        sender INT, 
                        reciever INT, 
                        datetime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
                        message VARCHAR(1000) NOT NULL)`,(error,result)=>{
                            if (error){
                                console.error('Error while creating the table messagesTable: ',error);
                                return;
                            }
                            console.log('Successfully created table messagesTable');
                            addForeignkeys();
                        })  
}


function createLikesTable(){
    database.query(`CREATE TABLE IF NOT EXISTS likesTable
                    (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                     postId INT NOT NULL,
                     userId INT NOT NULL)`,(error, result)=>{
                        if (error){
                            console.error('Error while creating the table likesTable: ',error);
                            return;
                        }
                        console.log('Successfully created table likesTable');
                     })
}

function addForeignkeys(){
    database.query(`ALTER TABLE postsTable 
                                ADD CONSTRAINT fk_replyTo_posttable
                                FOREIGN KEY (replyTo) REFERENCES postsTable(id) ON DELETE SET NULL,
                                ADD CONSTRAINT fk_username_posttable
                                FOREIGN KEY (username) REFERENCES userTable(id) ON DELETE SET NULL,
                                ADD CONSTRAINT fk_channel_posttable
                                FOREIGN KEY (channel) REFERENCES channelsTable(id) ON DELETE SET NULL`,(error, result)=>{
                                    if (error){
                                        console.error('Error while adding foreign key to table postsTable: ',error);
                                        return;
                                    }
                                    console.log('Successfully added foreign key to table postsTable');
                                    
                                });
    
    database.query(`ALTER TABLE filesTable 
                                ADD CONSTRAINT fk_postId_filesTable
                                FOREIGN KEY (postId) REFERENCES postsTable(id) ON DELETE SET NULL,
                                ADD CONSTRAINT fk_messageId_filesTable
                                FOREIGN KEY (messageId) REFERENCES messagesTable(id) ON DELETE SET NULL`,(error, result)=>{
                                    if (error){
                                        console.error('Error while adding foreign key to table filesTable: ',error);
                                        return;
                                    }
                                    console.log('Successfully added foreign key to table filesTable');
                                    
                                });

    database.query(`ALTER TABLE channelsTable 
                                ADD CONSTRAINT fk_username_channelstable
                                FOREIGN KEY (username) REFERENCES userTable(id) ON DELETE SET NULL`,(error, result)=>{
                                    if (error){
                                        console.error('Error while adding foreign key to table channelsTable: ',error);
                                        return;
                                    }
                                    console.log('Successfully added foreign key to table channelsTable');
                                    
                                });

    database.query(`ALTER TABLE messagesTable 
                                ADD CONSTRAINT fk_sender_messagestable
                                FOREIGN KEY (sender) REFERENCES userTable(id) ON DELETE SET NULL, 
                                ADD CONSTRAINT fk_reciever_messagestable
                                FOREIGN KEY (reciever) REFERENCES userTable(id) ON DELETE SET NULL`,(error, result)=>{
                                    if (error){
                                        console.error('Error while adding foreign key to table messagesTable: ',error);
                                        return;
                                    }
                                    console.log('Successfully added foreign key to table messagesTable');
                                    
                                });

}




app.listen(PORT, () => {
    console.log('server is running on port ' + PORT + ".");
});