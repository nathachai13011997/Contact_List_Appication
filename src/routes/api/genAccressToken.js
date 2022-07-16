const router = require('express').Router()
const accressToken = require('../../controllers/genAccressToken.controller');

router.post('/', accressToken.onGenerateAccressToken)

module.exports = router;