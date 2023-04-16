var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexControllers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/listado', controller.list)
router.get('/:id', controller.detallePokemon)

module.exports = router;
