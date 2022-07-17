const express = require("express")

module.exports = async (app) => {
  // Parser Body
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  // Custom Response Format
  app.use(require("../services/responseFormat.service"))
}
