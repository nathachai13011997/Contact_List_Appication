require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    secret: process.env.SECRET,
    token_expires: process.env.TOKEN_EXPIRES,
    mail_user: process.env.MAIL_USER,
    mail_pass: process.env.MAIL_PASS,
    tamplate_id: process.env.TAMPLATE_ID,
  }