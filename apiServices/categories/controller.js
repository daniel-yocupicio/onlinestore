const Category = require('./model');

module.exports = {
    /**
     * This function return all categories. 
     * @param {*} req request parameter.
     * @param {*} res response parameter to send categories.
     */
    async getCategories(req, res){
        const categories = await Category.findAll();
        return res.json({data: categories});
    },
};
