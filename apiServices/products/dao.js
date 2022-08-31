const {connection} = require('../../services/mysql');

module.exports = {
    /**
     * This function consult the data in mysql.
     */
    async getCategories(){
        const sql = "select * from category";

        return new Promise((resolve, reject) => {
            connection.query(sql,[])
            .then(data => {
                const jsonString = JSON.stringify(Object.assign({}, data));
                const json_obj = JSON.parse(jsonString);
                return resolve(json_obj);
            })
            .catch(err => {
                return resolve(err);
            });
        });
    },
};
