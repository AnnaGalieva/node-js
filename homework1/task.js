// Напишите HTTP сервер и реализуйте два обработчика, где:
// - По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// - А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// - Также реализуйте обработку несуществующих роутов (404).
// - * На каждой странице реализуйте счетчик просмотров. Значение счетчика
// должно увеличиваться на единицу каждый раз, когда загружается страница


const http = require('http');
let main = 1;
let about = 1;
let p404 = 1;

const server = http.createServer((req, res) => {
    console.log('Закпрос получен');
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8',
        });
        res.end(`<h1>Корневая страница</h1>
                        <h2>Просмотров: ${main} раз</h2>
                        <a href='/about'>Ссылка на страницу /about</a>`);
        main++;
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8',
        });
        res.end(`<h1> Страниица About</h1>
                        <h2>Просмотров: ${about} раз</h2> 
                        <a href='/'>Ссылка на страницу /</a>`);
        about++;
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html;charset=UTF-8',
        });
        res.end(`<h1>страница не найдена</h1>
                        <h2>Просмотров: ${p404} раз</h2> `);
        p404++;
    }
});

const port = 3000;


server.listen(port, () => {
    console.log(`сервер запущен на порту ${port}`);
});