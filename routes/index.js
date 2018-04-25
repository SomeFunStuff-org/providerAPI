var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var providerList = JSON.stringify({
        providers: [
        {   "id": 1, "name": "lawncare", "tier": 1 },
        {   "id": 2, "name": "window cleaning", "tier": 1 },
        {   "id": 3, "name": "toilet scrubbing", "tier": 1 },
        {   "id": 4, "name": "plumbing", "tier": 2 },
        {   "id": 5, "name": "lawyer", "tier": 5 }
        ]
    })
  console.log(providerList);
  res.send(providers);
});

module.exports = router;
