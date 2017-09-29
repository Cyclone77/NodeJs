var express = require('express');

var app = express();

//路由
//单个回调函数可以处理一个路由。例如：
app.get('/example/a', function(req, res) {
    res.send('Hello from A!');
});

//多个回调函数可以处理一个路由（确保您指定 next 对象）。例如：
app.get('/example/b', function(req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function(req, res, next) {
    next();
    //res.send('第二个回调函数!'); 这里send是没用的
}, function(req, res) {
    res.send('第三个回调函数!');
});

//一组回调函数可以处理一个路由。例如：
var cb0 = function(req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function(req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function(req, res) {
    res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

//独立函数与一组函数的组合可以处理一个路由。例如：
app.get('/example/d', [cb0, cb1], function(req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function(req, res) {
    res.send('Hello from D!');
});

//响应方法

//res.download()	
app.get('/file', (req, res) => {
    console.log('进入文件下载页面');
    res.download(__dirname + '/public/css/style.css', 'style.css');
})

//app.route
app.route('/book')
    .get((req, res) => {
        res.send('书名：《javascript 权威指南》')
    })
    .post((req, res) => {
        res.send('添加一本书！')
    })
    .put((req, res) => {
        res.send('更新书的状态！')
    })

//加载路由模块
var birds = require('./birds');
app.use('/birds', birds);


app.listen(3000, () => {
    console.log('监听3000');
})