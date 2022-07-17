const router = require("express").Router()
const controllers = require("../../controllers/groupContact.controller")
const validators = require("../../validators/index")

router.get("/", controllers.onGetAll)
router.post("/", validators.contact.group, validators.check, controllers.onInsert)
router.put("/:idGroupContact", validators.contact.group, validators.check, controllers.onUpdate)
router.delete("/:idGroupContact", controllers.onDelete)

module.exports = router
