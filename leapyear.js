const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const { config } = require('./config/index');
app.use(bodyParser.urlencoded({ extended: true }));

const formulario =
  '<h1>Ingrese un año</h1>' +
  '<form method="post" action="/leapyear">' +
  '<input type="text" name="anio">' +
  '<input type="submit" value="Enviar">' +
  '</form>';

app.get('/', (req, res) => {
  res.send(
    '<html><body>' +
    formulario + 
    '</body></html>'
  );
});

app.get('/json', function (req, res) {
  res.json({
    hello: 'world'
  });
});

//post anio: 2020 Bisiesto
app.post('/leapyear', (req, res) => {
  const year = req.body.anio;
  
  if (((year % 4 == 0) && (year % 100 != 0 )) || (year % 400 == 0)){
    res.send( `El año ${year} es año bisiesto` );
  } else {
    res.send( `El año ${year} no es año bisiesto` );
  }
})

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
})