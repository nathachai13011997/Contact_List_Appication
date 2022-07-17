const { calculatingPIT } = require("../services/calculatingPIT.service"),
  { formatNumber } = require("../services/formatNumber.service")

const methods = {
  async calculatingPIT(req, res) {
    try {
      const result = calculatingPIT(req.body.income)
      res.success("Personal Income Tax(PIT): " + formatNumber(result) + " baht")
    } catch (error) {
      res.error(error)
    }
  }
}

module.exports = { ...methods }
