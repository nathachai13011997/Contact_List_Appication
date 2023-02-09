const { generate } = require("../services/genAccressToken.service")

const methods = {
  async onGenerateAccressToken(req, res) {
    try {
      /* 
            #swagger.tags = ['Token']
            #swagger.description = 'Generate Accress Token'
            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/TokenRes" }
            }
            #swagger.responses[500] = {
                schema: { $ref: "#/definitions/ErrorRes" }
            }
        */

      const result = await generate(req.body)
      res.success(result)
    } catch (error) {
      res.error(error)
    }
  }
}

module.exports = { ...methods }
