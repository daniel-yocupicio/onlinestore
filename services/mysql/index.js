require('dotenv').config();
const mysql = require('mysql');

const config = {
    host: process.env.NODE_ENV=='production' ? process.env.DEPLOY_HOST_DB : process.env.HOST_DB,
    user: process.env.NODE_ENV=='production' ? process.env.DEPLOY_USER_DB : process.env.USER_DB,      
    password: process.env.NODE_ENV=='production' ? process.env.DEPLOY_PASSWORD_DB : process.env.PASSWORD_DB,      
    database: process.env.NODE_ENV=='production' ? process.env.DEPLOY_NAME_DB : process.env.NAME_DB, 
    port: process.env.NODE_ENV=='production' ? process.env.DEPLOY_PORT_DB : process.env.PORT_DB,       
};

var pool = mysql.createPool(config);

exports.connection = {
    query: async function (sql, values) {
        return new Promise((resolve, rejected) => {
            pool.getConnection(function(err, conn) {
                if(err) rejected({error: true, type: 'error in connetion'});
                conn.query(sql, values, function(error, results, fields){
                    if(error) return rejected({error: true, type: 'error in query'});
                    return resolve({data: results});
                })
            })
        })
    }
};