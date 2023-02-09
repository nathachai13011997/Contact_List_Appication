const router = require("express").Router()
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../../swagger_output.json")

router.use(`/api`, require(`./api`))
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = router
