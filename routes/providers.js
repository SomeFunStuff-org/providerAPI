var express = require('express');
var db = require('../javascript/providersDb.js');

var router = express.Router();

/* GET providers listing. */
router.get('/getProviders', function(req, res, next) {
    db.getProviders()
    .then(function(data){
        res.send(data);
    });
});

router.get('/getProvider', function(req, res, next) {
    db.getProvider(id)
    .then(function(provider) {
        res.send(provider);
    });
});

//TODO: can users create Providers?
router.post('/addProvider', function(req, res, next) {
    db.addProvider(req.body)
    .then(function(data){
        res.send('status: 200 Successful');
    });
});

module.exports = router;
