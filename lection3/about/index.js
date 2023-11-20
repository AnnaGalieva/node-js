const express = require('express');

const app = express();
//корневая страница
app.get('/', (req, res) => {
    res.send('<h1>Добро пожаловать на мой сайт!</h1>');
});
//страница обо мне
app.get('/about', (req, res) => {
    res.send('<h1>Страница обо мне!</h1>');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});