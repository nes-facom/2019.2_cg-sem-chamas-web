const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const port = 3000;
const db = require("./app/models");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use(bodyParser.json());

app.listen(port, () => console.log(`BACKEND is running in ${port}`));
