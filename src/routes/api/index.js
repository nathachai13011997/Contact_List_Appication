const router = require("express").Router()
const guard = require("../../middleware/auth.guard").guard
const configs = require("../../configs/app")

router.use("/group", guard, require("./groupContact"))
router.use("/sub", guard, require("./subContact"))
router.use("/token", require("./genAccressToken"))
router.use("/akeneo", require("./sendToAkeneo"))
router.use("/mail", guard, require("./sendMail"))
router.use("/pit", guard, require("./calculatingPIT"))
router.use("/", (req, res)=> {
    res.success("MY_VARIABLE: " + configs.my_variable)
})

module.exports = router
