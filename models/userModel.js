const db = require('../config/database');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users ORDER BY name', (err, results) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(results)
                }
            });
        })
    }
}