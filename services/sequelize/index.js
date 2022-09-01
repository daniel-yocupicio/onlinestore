require('dotenv').config();
const { Sequelize } = require('sequelize');

const db = new Sequelize(
    process.env.NODE_ENV=='production' ? process.env.DEPLOY_NAME_DB : process.env.NAME_DB,
    process.env.NODE_ENV=='production' ? process.env.DEPLOY_USER_DB : process.env.USER_DB,
    process.env.NODE_ENV=='production' ? process.env.DEPLOY_PASSWORD_DB : process.env.PASSWORD_DB,
    {
        host: process.env.NODE_ENV=='production' ? process.env.DEPLOY_HOST_DB : process.env.HOST_DB,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 5000,
        }
    }
    );

module.exports = db;