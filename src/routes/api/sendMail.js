const router = require('express').Router()
const email = require('../../controllers/email');

router.post('/', email.sendMail)

module.exports = router;