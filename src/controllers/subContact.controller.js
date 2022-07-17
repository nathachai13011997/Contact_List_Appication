const Contact = require("../module/Contact")

const methods = {
  async onGetByIdGroup(req, res) {
    try {
      const result = await Contact.findByIdGroup(req.params.idGroupContact)
      res.success(result)
    } catch (error) {
      res.error(error)
    }
  },

  async onDelete(req, res) {
    try {
      await Contact.deleteSub(req.params.idGroupContact, req.params.idSubContact)
      res.success("success")
    } catch (error) {
      res.error(error)
    }
  },

  async onInsert(req, res) {
    try {
      const result = await Contact.insertSub(req.params.idGroupContact, req.body)
      res.success(result)
    } catch (error) {
      res.error(error)
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await Contact.updateSub(req.params.idGroupContact, req.params.idSubContact, req.body)
      res.success(result)
    } catch (error) {
      res.error(error)
    }
  }
}

module.exports = { ...methods }
