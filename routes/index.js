var express = require('express')
var router = express.Router()
var config = require('../config')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Three Good Things',
    csrf: req.csrfToken(),
    pushServerKey: config.push.publicKey
  })
})
router.get('/env', function (_req, res, _next) {
  res.send(config.env)
})

module.exports = router
