var express = require('express');
var app = express();

var myLogger = (req, res, next) => {
    console.log('过中间件函数，后执行，调用时间:' + (+new Date()));
    next();
}

app.post('/updata', (req, res) => {
    res.send("数据已经更新！");
})

app.use(myLogger);

app.get('/', (req, res) => {
    res.send("Hello World!" + (+new Date()));
})

app.listen(3000, () => {
    console.log('服务已经启动');
})