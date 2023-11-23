// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:
// - На каждой странице реализован счетчик просмотров
// - Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// - Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// - Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер

const express = require('express');
const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'file.json');
if (!fs.existsSync(pathToFile)) {
    const dateNow = new Date(Date.now()).toUTCString();
    const logData = {
        "main": {
            count: 0,
            lastVisit: dateNow,
        },
        "about": {
            count: 0,
            lastVisit: dateNow,
        },
        "p404": {
            count: 0,
            lastVisit: dateNow,
        },
    };
    fs.writeFileSync(pathToFile, JSON.stringify(logData, null, 2));
    console.log(JSON.stringify(logData));
}
const logData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
let main = logData.main.count;
let about = logData.about.count;
let p404 = logData.p404.count;
const app = express();

app.use((req, res, next) => {
    console.log('Поступил запрос', req.method, req.url);
    next();
});
app.get('/', function (req, res) {
    main++;
    res.send(`<h1>Корневая страница</h1>
    <h2>Просмотров: ${main} раз</h2>
    <a href='/about'>Ссылка на страницу /about</a>`);
    logData.main.count = main;
    logData.main.lastVisit = new Date(Date.now()).toUTCString();
    fs.writeFileSync(pathToFile, JSON.stringify(logData, null, 2));
});
app.get('/about', function (req, res) {
    about++;
    res.send(`<h1> Страниица About</h1>
    <h2>Просмотров: ${about} раз</h2>
    <a href='/'>Ссылка на страницу /</a>`);
    logData.about.count = about;
    logData.about.lastVisit = new Date(Date.now()).toUTCString();
    fs.writeFileSync(pathToFile, JSON.stringify(logData, null, 2));
});
app.use((req, res) => {
    p404++;
    res.status(404);
    res.send(`<h1>Страница не найдена</h1>
    <h2>Просмотров: ${p404}  раз</h2>`);
    logData.p404.count = p404;
    logData.p404.lastVisit = new Date(Date.now()).toUTCString();
    fs.writeFileSync(pathToFile, JSON.stringify(logData, null, 2));
});

app.listen(3000);