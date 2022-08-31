require('dotenv').config();
const mysql = require('mysql');

var conection = mysql.createConnection({
    host: process.env.NODE_ENV='production' ? process.env.DEPLOY_HOST_DB : process.env.HOST_DB,
    user: process.env.NODE_ENV='production' ? process.env.DEPLOY_USER_DB : process.env.USER_DB,      
    password: process.env.NODE_ENV='production' ? process.env.DEPLOY_PASSWORD_DB : process.env.PASSWORD_DB,      
    database: process.env.NODE_ENV='production' ? process.env.DEPLOY_NAME_DB : process.env.NAME_DB, 
    port: process.env.NODE_ENV='production' ? process.env.DEPLOY_PORT_DB : process.env.PORT_DB,       
});

conection.connect(function (error) {
    if (error) {
        throw error;
    }
    console.log("conexión exitosa");
});
 
module.exports = { conection };