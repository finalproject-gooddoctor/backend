// const db = require('../db/config');
// const doctors = {};

// doctors.getAll= (req, res, next) => {
//   db.manyOrNone('SELECT * from doctor ;') 
//     .then((data) => {
//       console.log(data);
//       res.locals.doctor = data;
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }
// module.exports = doctor;