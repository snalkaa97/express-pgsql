const db = require('../config/database');
const model = require('../models/userModel');


// Tanpa Model
// const getUsers = (req, res) => {
//     db.query('SELECT * FROM pegawai ORDER BY id ASC', (err, results) => {
//         if(err){
//             throw err;
//         }
//         console.log(results.rows);
//         res.status(200).json({
//             data: results.rows
//         })
//     });
// }

// dengan Model
const getUsers = async (req, res) => {
   const data = await model.getAll();
   const response = {
        success: true,
        data: data.rows
   }
   res.status(200).json(response);
}

module.exports = {
    getUsers,
}