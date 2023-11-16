const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Закпрос получен');
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8',
        });
        res.end('<h1>добро пожаловать на мой сайт!</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8',
        });
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html;charset=UTF-8',
        });
        res.end('<h1>страница не найдена</h1>');
    }
});

const port = 3000;


server.listen(port, () => {
    console.log(`сервер запущен на порту ${port}`);
});