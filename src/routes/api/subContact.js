const router = require('express').Router()
const controllers = require('../../controllers/subContact.controller');

router.get('/:idGroupContact', controllers.onGetByIdGroup)
router.post('/:idGroupContact', controllers.onInsert)
router.put('/:idGroupContact/:idSubContact', controllers.onUpdate)
router.delete('/:idGroupContact/:idSubContact', controllers.onDelete)

module.exports = router;