var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Got a POST request');
});

app.get('/user', (req, res) => {
    res.send('Got a PUT request at /user');
})

app.use('/file', express.static(__dirname + '/public'));

//处理404
app.use((req, res, next) => {
    res.status(404).send('404 page!');
})

//处理程序错误
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

var server = app.listen(3000, () => {
    var port = server.address().port;
    console.log('可以访问%s端口了', port);
    console.log(__dirname);
});