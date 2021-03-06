require('dotenv').config();
const express = require('express');
//const routes = require('./routes')
const logger = require('morgan');
const mongoose = require('mongoose')
//require('dotenv').config();

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes/api/index.js'));
app.use(require('./routes/html/index.js'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { 
useNewUrlParser: true,
useFindAndModify: false,
useCreateIndex: true,
useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

  module.exports = db;