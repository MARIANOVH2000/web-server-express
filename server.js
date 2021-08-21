const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
//express hbs engine
app.set('view engine', 'hbs');

//helpers 

app.get('/', function(req, res) {
    //res.send('Hello World')

    res.render('home', {
        nombre: 'MariANO VeGa',
        anio: new Date().getFullYear()
    });

});
//helpers para hacer mayuscula la primera palabra

app.get('/about', function(req, res) {
    //res.send('Hello World')

    res.render('about', {
        anio: new Date().getFullYear()
    });

});


app.listen(port, () => {
    console.log(`Ejecutnado peticiones en el puerto  ${port}`);
});