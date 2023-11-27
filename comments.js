// create a web server
// run this file using node comments.js
// then go to your browser and type localhost:3000
// then you will see "Hello World"

const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

server.listen(3000, '');