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

//特殊路径，正则匹配
//此路由路径将匹配 acd 和 abcd。
app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

//此路由路径将匹配 abcd、abbcd、abbbcd 等。
app.get('/ab+cd', (req, res) => {
    res.send('ab+cd');
});

//此路由路径将匹配 abcd、abxcd、abRABDOMcd、ab123cd 等。
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});

//此路由路径将匹配 /abe 和 /abcde。
app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});

//此路由路径将匹配名称中具有“a”的所有路由。
app.get(/a/, function(req, res) {
    res.send('/a/');
});

//此路由路径将匹配 butterfly 和 dragonfly，但是不匹配 butterflyman、dragonfly man 等。
app.get(/.*fly$/, function(req, res) {
    res.send('/.*fly$/');
});

app.listen(3000, () => {
    console.log('监听3000');
})