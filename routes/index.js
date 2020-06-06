var express = require('express')
var router = express.Router()
const controller = require('./controller')

router.get('/', (req, res) => {
	res.render('index')
})
router.post('/newGame', controller.newGame)
router.post('/joinGame', controller.joinGame)

module.exports = router
