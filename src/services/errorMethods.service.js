module.exports = {
  ErrorBadRequest(msg) {
    let error = new Error(msg)
    error.message = msg
    error.status = 400
    return error
  },

  ErrorUnauthorized(msg) {
    let error = new Error(msg)
    error.message = msg
    error.status = 401
    return error
  },

  ErrorNotFound(msg) {
    let error = new Error(msg)
    error.message = msg
    error.status = 404
    return error
  },

  ErrorUnprocessableEntity(msg) {
    let error = new Error(msg)
    error.message = msg
    error.status = 422
    return error
  }
}
