
const http = require('http');


http.createServer( (req, res) => {
        res.writeHead(200, {'Content-type':'application/json'});
        let salida = {
            nombre:'Miguel',
            edad: 41,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('Hello World');
        res.end();
    })
    .listen(8080);

console.log('Listening port 8080');