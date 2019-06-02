const express = require('express');
const app = express();
const hbs = require('hbs');
const helpers = require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(  __dirname + '/public'));
//Express hbs engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine','hbs');

// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Miguel',
//         edad: 41,
//         url: req.url
//     }

//     res.send(salida);
// })

app.get('/', (req, res) => {
    res.render('home',{
        name: 'miguel gaRcía'
    });
})

app.get('/about',(req,res) =>{
    res.render('about');
})

app.get('/data', (req, res) => {
    res.send('Hello Data');
})

app.listen(port, ()=>{
    console.log(`Listening requests in port ${port}`);
});