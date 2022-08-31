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
                return resolve({data: data});
            })
            .catch(err => {
                return resolve(err);
            });
        });
    },
};
