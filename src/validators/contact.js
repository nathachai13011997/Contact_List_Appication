const { check } = require("express-validator")

module.exports = {
  group: [check("nameGroupContact").notEmpty().withMessage("is Empty")],
  subGroup: [
    check("firstName").notEmpty().withMessage("is Empty"),

    check("lastName").notEmpty().withMessage("is Empty"),

    check("BirthDate").notEmpty().withMessage("is Empty"),

    check("phone").notEmpty().withMessage("is Empty"),

    check("email").notEmpty().withMessage("is Empty").isEmail().withMessage("must be email"),

    check("url").notEmpty().withMessage("is Empty")
  ]
}
