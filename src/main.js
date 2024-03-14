const express = require("express"),
  app = express(),
  config = require("./configs/app"),
  fs = require("fs")

// Express Configs
require("./configs/express")(app)

// Routes
app.use(require("./routes"))

if (!fs.existsSync("upload")) {
  fs.mkdirSync("upload")
}

const server = app.listen(config.port, () => {
  let host = server.address().address
  let port = server.address().port
  // console.log(`Server is running at http://${host}:${port}`)
  console.log(`Server is running on port ${port}`)
})
