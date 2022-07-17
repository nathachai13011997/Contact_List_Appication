const multer = require("multer"),
  path = require("path")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/image"))
  },
  filename: (req, file, cb) => {
    const fileType = file.originalname.split(".")[1]
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + "." + fileType)
  }
})

const upload = multer({ storage: storage })

module.exports = upload
