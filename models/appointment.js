// const db = require('../db/config');
// const appointments = {};


// appointments.getAll= (req, res, next) => {
//   db.manyOrNone('SELECT * from appointment ;') 
//     .then((data) => {
//       console.log(data);
//       res.locals.appointment = data;
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }
// appointments.create = (req, res, next) => {
//     db.one(`INSERT INTO appointment(patientID, doctorID, app_no, date, time) 
//     VALUES($1, $2 , $3, $4, $5), ($1, $4 , $5),($1, $6 , $7),($1, $8 , $9),($1, $10 , $11); `
//     ,[req.body, req.body,  req.body ,
//         req.body,req.body,  req.body , req.body,
//         req.body, req.body, req.body, req.body
//     ])
//     .then((data) => {
//       cconsol.log(data);
//       res.locals.appointment = data;
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }

// appointments.delete = (req, res, next) => {
//   db.none("DELETE FROM appointment WHERE request_id=$1;",[req.body.request_id])
//   .then(() => {
//     next();
//   }).catch(error => console.log(error));
// }
// module.exports = appointment;