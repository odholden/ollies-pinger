var express = require('express'),
    router  = express.Router();

var quotesController = require('../controllers/quotesController');

router.get('/', function(req, res) {
  res.redirect('/quotes');
})

router.route('/quotes')
  .get(quotesController.quotesIndex)
  .post(quotesController.quotesCreate)

router.route('/quotes/new')
  .get(quotesController.quotesNew)

router.route('/quotes/:id/edit')
  .get(quotesController.quotesEdit)

router.route('/quotes/:id')
  .get(quotesController.quotesShow)
  .patch(quotesController.quotesUpdate)
  .delete(quotesController.quotesDelete)

module.exports = router;
