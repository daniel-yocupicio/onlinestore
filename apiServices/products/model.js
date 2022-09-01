const {DataTypes} = require('sequelize');
const db = require('../../services/sequelize');

const Product = db.define('product',{
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    url_image: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    discount: { type: DataTypes.INTEGER },
    category: { type: DataTypes.INTEGER },
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'product',
})

module.exports = Product;
