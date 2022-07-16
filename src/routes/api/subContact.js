const router = require('express').Router()
const controllers = require('../../controllers/subContact.controller');

router.get('/:idGroupContact', controllers.onGetByIdGroup)
router.post('/:idGroupContact', controllers.onInsert)
router.put('/:idSubContact', controllers.onUpdate)
router.delete('/:idSubContact', controllers.onDelete)

module.exports = router;