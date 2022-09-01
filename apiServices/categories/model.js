const {DataTypes} = require('sequelize');
const db = require('../../services/sequelize');

const Category = db.define('Category', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: { type: DataTypes.STRING },
    },
    {    
        createdAt: false,
        updatedAt: false,
        tableName: 'Category',
    });

module.exports = Category;