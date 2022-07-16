const router = require('express').Router()
const controllers = require('../../controllers/genAccressToken.controller');

router.post('/', controllers.onGenerateAccressToken)

module.exports = router;