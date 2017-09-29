var express = require('express');
var router = express.Router();

// 路由中间健
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});

router.get('/ab+cd', (req, res) => {
    res.json({
        "bookname": "《javascript 权威指南》",
        'price': 30
    })
    res.end();
})

module.exports = router;