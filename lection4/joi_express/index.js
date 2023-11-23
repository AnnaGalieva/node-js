const express = require('express');
const { checkBody, checkParams } = require('./validation/validator');
const { idScheme, articleScheme } = require('./validation/scheme')

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json());

//получить все статьи
app.get('/articles', (req, res) => {
    res.send({ articles });
});
//роут получения отдельной статьи
app.get('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));
    if (article) {
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});
//создание статьи
app.post('/articles', checkBody(articleScheme), (req, res) => {
    uniqueID += 1;
    articles.push({
        id: uniqueID,
        ...req.body
    });
    res.send({
        id: uniqueID,
    })
});

//роут обновления статьи
app.put('/articles/:id', checkParams(idScheme), checkBody(articleScheme), (req, res) => {

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }

});
//удаление статьи
app.delete('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));
    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});
//обработка несуществующих роутов
app.use((req, res) => {
    res.status(404).send({
        message: 'url not found'
    })
});

app.listen(3000);