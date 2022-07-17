const router = require("express").Router()
const guard = require("../../middleware/auth.guard").guard

router.use("/group", guard, require("./groupContact"))
router.use("/sub", guard, require("./subContact"))
router.use("/token", require("./genAccressToken"))
router.use("/mail", guard, require("./sendMail"))
router.use("/pit", guard, require("./calculatingPIT"))

module.exports = router
