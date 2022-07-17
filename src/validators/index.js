const { validationResult } = require("express-validator"),
  { ErrorUnprocessableEntity } = require("../services/errorMethods.service")

const contact = require("./contact")

const validators = {
  contact
}

module.exports = {
  check(req, res, next) {
    let errors = validationResult(req).array()
    if (errors.length == 0) return next()
    let messageError = `${errors[0].param}: ${errors[0].msg}`
    res.error(ErrorUnprocessableEntity(messageError))
  },
  ...validators
}
