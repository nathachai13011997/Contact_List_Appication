const router = require("express").Router()
const controllers = require("../../controllers/sendToAkeneo.controller")

router.post("/product", controllers.onCreateProduct)
router.post("/productDevice", controllers.onCreateProductDevice)
router.post("/token", controllers.onGenerateToken)
router.post("/tariff", controllers.onCreatetariff)

module.exports = router
