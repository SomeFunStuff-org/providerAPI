var express = require('express');
var db = require('../javascript/providersDb.js');

var router = express.Router();

/* GET providers listing. */
router.get('/getProviders', function(req, res, next) {
    var providerList = db.getProviders()
        .then(function(data){
            res.send(data);
        });
});

module.exports = router;
