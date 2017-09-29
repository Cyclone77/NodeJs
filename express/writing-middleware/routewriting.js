var express = require('express');
var app = express();
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function(req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function(req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function(req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id == 0) next('route');
    // otherwise pass control to the next middleware function in this stack
    else next(); //
}, function(req, res, next) {
    // send a regular page
    res.send('regular');
});

// handler for the /user/:id path, which sends a special page
router.get('/user/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send('special');
});

// mount the router on the app
app.use('/admin', router);

var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', function(req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(3000);