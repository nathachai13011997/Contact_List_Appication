const { accessToken } = require("../services/auth.service")

const methods = {
  generate(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const access_token = accessToken()

        resolve({ accessToken: access_token })
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = { ...methods }
