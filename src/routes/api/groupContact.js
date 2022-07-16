const router = require('express').Router()
const controllers = require('../../controllers/groupContact.controller');

router.get('/', controllers.onGetAll)
router.post('/', controllers.onInsert)
router.put('/:idGroupContact', controllers.onUpdate)
router.delete('/:idGroupContact', controllers.onDelete)

module.exports = router;