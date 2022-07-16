const router = require('express').Router()
const email = require('../../controllers/email.controller');

router.post('/', email.sendMail)

module.exports = router;