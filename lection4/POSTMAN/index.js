const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello</h1>');
// });


// app.post('/', (req, res) => {
//     res.send('<h1>Hello</h1>');
// });

// app.use(express.json());
// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('<h1>post request</h1>');
// });

// app.use(express.json());
// app.put('/', (req, res) => {
//     console.log(req.body);
//     res.send('<h1>put request</h1>');
// });

app.use(express.json());
app.delete('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>delete request</h1>');
});



app.listen(3000);