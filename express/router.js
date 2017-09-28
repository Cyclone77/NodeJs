var express = require('express');

var app = express();

//发送post请求
app.post('/', (req, res) => {
    res.send('hello world!');
})

//发送get请求
app.get('/about', (req, res) => {
    res.send('about');
})

app.get('/read.txt', (req, res) => {
    res.send('read.txt');
})

//无论您使用 GET、POST、PUT、DELETE 还是在 http 模块中支持的其他任何 HTTP 请求方法，都将为针对“/secret”的请求执行处理程序。
app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    res.send('发送任何请求都响应！');
});

//特殊路径
app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

app.listen(3000, () => {
    console.log('监听3000');
})