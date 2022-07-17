const router = require("express").Router()
const controllers = require("../../controllers/subContact.controller")
const validators = require("../../validators/index")

router.get("/:idGroupContact", controllers.onGetByIdGroup)
router.post("/:idGroupContact", validators.contact.subGroup, validators.check, controllers.onInsert)
router.put("/:idGroupContact/:idSubContact", validators.contact.subGroup, validators.check, controllers.onUpdate)
router.delete("/:idGroupContact/:idSubContact", controllers.onDelete)

module.exports = router
