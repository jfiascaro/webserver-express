const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');


//Obtener puerto en Heroku
const port = process.env.PORT || 3000;

//Express npm -i express --save
app.use(express.static(__dirname + '/public'));

//Express HBS Engine npm i hbs --save
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'josé fiascaro'
    });
});


app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones el puerto ${port}`);
});