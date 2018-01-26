const http = require('http');
const fs = require('fs');
const port = 3000;
const pub = `${__dirname}/public` ;

const serveCSS =  (req, res) => {
    if (req.url.indexOf('css') !== -1) {
        const css = fs.createReadStream(__dirname + req.url, 'utf8');
        css.pipe(res);
    }
};

const requestHandler = (req, res) => {
    serveCSS(req, res);
    fs.readFile(__dirname +'/public/index.html', 'utf-8', (err, data) => {
        res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port);