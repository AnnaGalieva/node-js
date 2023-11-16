const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Закпрос получен');

    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8',
    });
    res.end('<h1>мой сервер рвботает!</h1>');
});

const port = 3000;

server.listen(port,()=>{
    console.log(`сервер запущен на порту ${port}`);
});