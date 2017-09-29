var express = require('express');
var app = express();

//应用层的中间层
app.use((req, res, next) => {
    console.log('Time:%s', Date.now());
    next();
})

app.use('/user/:id', (req, res, next) => {
    console.log('应用App的中间层Request Type: ', req.method);
    console.log('应用App的中间层ID:', req.params.id);
    next();
})

app.get('/user/:id', function(req, res, next) {
    if (req.params.id == 0) res.send('id不正确');
    else next();
}, function(req, res, next) {
    res.send('regular');
});

app.listen(3000, () => {
    console.log('服务已经启动:', Date.now());
})