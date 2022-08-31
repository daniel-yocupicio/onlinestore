const {conection} = require('../../services/mysql');

module.exports = {
    /**
     * This function consult the data in mysql.
     */
    async getCategories(){
        const sql = "select * from category";

        return new Promise((resolve, reject) => {
            conection.query(sql, function(error, results, fields) {
                if(error) return reject({error: 'an error occurred when querying the data'});
                const jsonString = JSON.stringify(Object.assign({}, results));
                const json_obj = JSON.parse(jsonString);
                return resolve(json_obj);
            })
        })
    },
};
