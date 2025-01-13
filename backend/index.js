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
       
    })
}

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT + ".");
});