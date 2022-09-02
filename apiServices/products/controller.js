const Product = require('./model');

module.exports = {
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
    }
};