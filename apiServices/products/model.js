const dao = require('./dao');

module.exports = {
    /**
     * This function create a categories model.
     */
    async getModelCategories(){
        return dao.getCategories();
    },
};
