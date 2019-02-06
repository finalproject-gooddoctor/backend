const express = require("express");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv =require("dotenv");
const app = express();
dotenv.config();

const port = process.env.DEV_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const authController = require("./controllers/authController");
app.use("/api/", authController);

app.listen(port, function() {
  console.log("---------------------------------------");
  console.log("Express listening on localhost:" + port);
  console.log("---------------------------------------");
});

// const express = require('express');
// const port = 3000;
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');

// const app = express();

// app.use(logger('dev'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride('_method'));

// app.get('/', (req, res) => {
//   res.send('Doctor');
// })

// const patientController = require('./controllers/patient');

// app.use('/patient', patientController);



// app.listen(port, () => {
//     console.log('---------------------------------------');
//     console.log('Express listening on localhost:' + port);
//     console.log('---------------------------------------');
//   });