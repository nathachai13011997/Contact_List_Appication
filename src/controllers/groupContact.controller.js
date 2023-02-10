const Contact = require("../module/Contact")

const methods = {
  async onGetAll(req, res) {
    try {
      /* 
            #swagger.tags = ['Group']
            #swagger.description = 'Get group lists'
            #swagger.parameters['authorization'] = {
                in: 'header',
                type: 'string'
            }
            #swagger.responses[200] = {
                schema: [{ $ref: "#/definitions/GroupRes" }]
            }
            #swagger.responses[500] = {
                schema: { $ref: "#/definitions/ErrorRes" }
            }
        */

      const result = await Contact.findGroup()
      res.success(result)
    } catch (error) {
      res.error(error)
    }
  },

  async onDelete(req, res) {
    try {
      await Contact.deleteGroup(req.params.idGroupContact)
      res.success("success")
    } catch (error) {
      res.error(error)
    }
  },

  async onInsert(req, res) {
    try {
      /* 
            #swagger.tags = ['Group']
            #swagger.description = 'Insert group lists'
            #swagger.parameters['authorization'] = {
                in: 'header',
                required: 'true',
                type: 'string'
            }
             #swagger.parameters['data'] = {
                in: 'body',
                required: 'true',
                schema: {
                    $nameGroupContact: 'Bank123',
                }
            }
            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/GroupPostRes" }
            }
            #swagger.responses[500] = {
                schema: { $ref: "#/definitions/ErrorRes" }
            }
        */

      const result = await Contact.insertGroup(req.body)
      res.success(result)
    } catch (error) {
      res.error(error)
    }
  },

  async onUpdate(req, res) {
    try {
      /* 
            #swagger.tags = ['Group']
            #swagger.description = 'Update group lists'
            #swagger.parameters['authorization'] = {
                in: 'header',
                required: 'true',
                type: 'string'
            }
             #swagger.parameters['data'] = {
                in: 'body',
                required: 'true',
                schema: {
                    $nameGroupContact: 'test001',
                }
            }
            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/GroupPostRes" }
            }
            #swagger.responses[500] = {
                schema: { $ref: "#/definitions/ErrorRes" }
            }
        */

      const result = await Contact.updateGroup(req.params.idGroupContact, req.body)
      res.success(result, 200)
    } catch (error) {
      res.error(error)
    }
  }
}

module.exports = { ...methods }
