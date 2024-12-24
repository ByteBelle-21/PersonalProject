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
        //createDatabase();
    }
  });


app.listen(PORT, () => {
    console.log('server is running on port ' + PORT + ".");
});
