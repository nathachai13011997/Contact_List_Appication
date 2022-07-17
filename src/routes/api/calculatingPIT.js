const router = require("express").Router()
const controllers = require("../../controllers/calculatingPIT.controller")

router.post("/", controllers.calculatingPIT)

module.exports = router
