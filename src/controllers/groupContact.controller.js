const Contact = require("../module/Contact")

const methods = {
  async onGetAll(req, res) {
    try {
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
      const result = await Contact.insertGroup(req.body)
      res.success(result)
    } catch (error) {
      res.error(error)
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await Contact.updateGroup(req.params.idGroupContact, req.body)
      res.success(result, 200)
    } catch (error) {
      res.error(error)
    }
  }
}

module.exports = { ...methods }
