const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 2500;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  app.get('/', function(req, res) {
//    res.render('bienvenido', {title: 'navbar', message: 'Bienvenido a navbar'});
//  });

//  app.post('/api/ejemplo', (req, res) => {



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


app.get('/', (res, req) => {
  res.render('lista')
})


app.post('/', (res, req) => {
  const nombre = req.body.nombre 
  const AñoDeSalida = req.body.AñoDeSalida
  const autor = req.body.autor
  const editorial = req.body.editorial
  const idioma = req.body.idioma
  const AptoPara = req.body.AptoPara
  const origen = req.body.origen
  console.log(nombre);
})
