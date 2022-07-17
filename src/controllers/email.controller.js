const { sendMail } = require("../services/email.service")

const methods = {
  async sendMail(req, res) {
    try {
      await sendMail(req.body)
      res.success("success")
    } catch (error) {
      res.error(error)
    }
  }
}

module.exports = { ...methods }
