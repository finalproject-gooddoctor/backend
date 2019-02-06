var db = require("../db/config");
var bcrypt = require("bcrypt");

var user = {};
user.login = (req, res, next) => {
  db.one("SELECT * FROM users WHERE email = $1;", [req.body.email])
    .then(function(result) {
      if (bcrypt.compareSync(req.body.password, result.password_digest)) {
        req.user = result;
      }
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.findEmail = (req, res, next) => {
  db.oneOrNone("SELECT * FROM users WHERE email=$1;", [req.body.email])
    .then(function(result) {
      res.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.create = (req, res, next) => {

  console.log("req\n\n\n\n" , req.body)
  const salt = bcrypt.genSaltSync(10);
  db.one(
    "INSERT INTO users (name , email, password_digest) VALUES($1, $2 , $3) RETURNING *;",
    [
      req.body.name.toLowerCase(),
      req.body.email.toLowerCase(),
      bcrypt.hashSync(req.body.password, salt)
    ]
  )
    .then(function(result) {

      console.log(  req.user  , "\n\n\n\n\n*****")
      req.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

module.exports = user;



// const db = require('../db/config');
// const patients = {};


// patients.getAll= (req, res, next) => {
//   db.manyOrNone('SELECT * from patient;') 
//     .then((data) => {
//       console.log(data);
//       res.locals.patients = data;
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }

// patients.create = (req, res, next) => {
//   db.one('INSERT INTO patient (pname ,age ,gender ,statusOfDisease ,address ,phone ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;',
//     [req.body.pname,req.body.age,req.body.gender,req.body.statusOfDisease,req.body.address,req.body.phone])
//     .then((data) => {
//       res.locals.patient = data;
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }

// patients.update = (req, res, next) => {
//   db.one('UPDATE patient SET pname=$1, age=$2, gender=$3, statusOfDisease=$4, address=$5, phone=$6 WHERE patientID=$7 RETURNING *;',
//   [req.body.pname, req.body.age, req.body.gender, req.body.statusOfDisease, req.body.address, req.body.phone, req.params.id])
//     .then((data) => {
//       res.locals.patient = data;
//       console.log('UPDATING PATIENT');
//       console.log(data);
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }

// patients.delete = (req, res, next) => {
//   db.none('DELETE FROM patient WHERE patientID=$1',[req.params.id])
//     .then((data) => {
//       next();
//     })
//     .catch((error) => {
//       console.log(error)
//       next();
//     })
// }

// module.exports = patients;