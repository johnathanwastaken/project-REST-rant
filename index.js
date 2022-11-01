require('dotenv').config();
const express = require('express');
const app = express();

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.render("index");
});

// //Places
// const placesController = require("./controllers/places.js");
// app.use("/places", placesController);

app.get('*', (req, res) => {
    res.render('error404');
});

app.listen(PORT, () => {
    console.log("nomming at port", PORT);
  });