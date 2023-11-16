const http= require('http');

const server = http.createServer((req,res)=>{
    console.log('Закпрос получен');
});
const port= 3000;

server.listen(port,()=>{
    console.log(`сервер запущен на порту ${port}`);
});