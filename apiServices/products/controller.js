const Sequelize = require("sequelize");
const Product = require('./model');
const Category = require('../categories/model');

Product.belongsTo(Category, {foreignKey: "category"});
Category.hasMany(Product, {foreignKey: "category"});

module.exports = {
    /**
     * This method return products by category with a range of values..
     * @param {*} req This parameter is the params of the method get, has limit, offset and id.
     * @param {*} res 
     * @returns 
     */
    async getProductsByCategory(req, res) {
        const {id, limit, offset} = req.params;
        if(!id) return res.json({error: true, type: 'Id not found.'});
        if(!limit) return res.json({error: true, type: 'Limit not found.'});
        if(!offset) return res.json({error: true, type: 'Offset not found.'});
        try {
            const intLimit = parseInt(limit);
            const intOffset = parseInt(offset);
            const intId = parseInt(id);
            const productsbycategory = await Product.findAndCountAll({where: {category: intId} ,limit: intLimit, offset: intOffset})
            return res.json({data: productsbycategory.rows, count: productsbycategory.count})
        } catch(e) {
            return res.json({error: true, type: 'incorrect parameter typing.'});
        }
    },
    /**
     * This method get all products with a range of values.
     * @param {*} req This parameter is the params of the method get, has limit and offset.
     * @param {*} res 
     * @returns 
     */
    async getProducts(req, res) {
        const {limit, offset} = req.params;
        if(!limit) return res.json({error: true, type: 'Limit not found.'});
        if(!offset) return res.json({error: true, type: 'Offset not found.'});
        try {
            const intLimit = parseInt(limit);
            const intOffset = parseInt(offset);
            const products = await Product.findAndCountAll({limit: intLimit, offset: intOffset});
            return res.json({data: products.rows, count: products.count});
        } catch (e) {
            return res.json({error: true, type: 'incorrect parameter typing.'});
        }
    },
    /**
     * This method search the similar products in name product or name category with a range of values.
     * @param {*} req This parameter is the params of the method get, has limit, offset and search.
     * @param {*} res 
     * @returns 
     */
    async searchProduct(req, res){
        const {search, limit, offset} = req.params;
        if(!limit) return res.json({error: true, type: 'Limit not found.'});
        if(!offset) return res.json({error: true, type: 'Offset not found.'});
        if(!search) return res.json({error: true, type: 'Search not found.'});
        try {
            const intLimit = parseInt(limit);
            const intOffset = parseInt(offset);
            const products = await Product.findAndCountAll({
                                            limit: intLimit,   
                                            offset: intOffset, 
                                            include: [{model: Category}],
                                            where: {
                                             [Sequelize.Op.or] : [
                                                {'$product.name$': {
                                                    [Sequelize.Op.like]: '%' + search.replaceAll('+',' ') + '%',
                                                }},
                                                {'$category.name$': {
                                                    [Sequelize.Op.like]: '%' + search.replaceAll('+',' ') + '%',
                                                }},
                                             ],
                                            },
                                        });
            return res.json({data: products.rows, count: products.count});
        } catch (e) {
            return res.json({error: true, type: 'Error.'});
        }
    },
};