/*var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/
//this is the code I added from the tutorial.
var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
//addition to the 404 error
module.exports = {
getAllPuppies: getAllPuppies,
getSinglePuppy: getSinglePuppy,
createPuppy: createPuppy,
updatePuppy: updatePuppy,
removePuppy: removePuppy
};

function getAllPuppies(req, res, next) {};
function getSinglePuppy(req, res, next) {};
function createPuppy(req, res, next){};
function updatePuppy(req, res, next) {};
function removePuppy(req, res, next) {};