const router = require('express').Router();
const guard = require('../../middleware/auth.guard').guard;

router.use('/group', guard, require('./groupContact'))
router.use('/sub',  require('./subContact'))
router.use('/token', require('./genAccressToken'))
router.use('/mail', require('./sendMail'))


module.exports = router;