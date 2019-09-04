const fs = require('fs');
const path = require('path');

const express = require("express");
const app = express();
const port = 3001;

//const Sequelize = require('sequelize');
const config = require('../../config/database');

const db = {};
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.listen(port, () => console.log(`BACKEND is running in ${port}`));

var Denuncia = require("./denunciaModel.js");

var denuncia1 = new Denuncia('a','Tom','b','c','T','f');

console.log(denuncia1.geo);     

//teste
//const sequelize = new Sequelize(config);

//fs
//  .readdirSync(__dirname)
//  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
//  .forEach((file) => {
//    const model = sequelize.import(path.join(__dirname, file));
//    db[model.name] = model;
//  });
//
//Object.keys(db).forEach((modelName) => {
//  if (db[modelName].associate) {
//    db[modelName].associate(db);
//  }
//});

//db.sequelize = sequelize;
//db.Sequelize = Sequelize;
app.use(express.json());

//module.exports = db;

const denuncias = []

app.post('/denuncia', (req, res) => {
  const {protocolo} = req.body;
  const {foto} = req.body;
  const {geo} = req.body;
  const {intensidade} = req.body;
  const {observacao} = req.body;
  const {data} = req.body;

  denuncias.push(protocolo);
  denuncias.push(foto);
  denuncias.push(geo);
  denuncias.push(intensidade);
  denuncias.push(observacao);
  denuncias.push(geo);

  var Denuncia = require("./denunciaModel.js");

  var denuncia1 = new Denuncia(protocolo,foto,geo,intensidade,
    observacao,data);

  console.log(denuncia1.geo);  
  return res.json(data);
  //protocolo
  //foto
  //geo
  //intensidade
  //observacao
  //data
  
});




