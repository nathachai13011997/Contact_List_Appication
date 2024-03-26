require("dotenv").config()

module.exports = {
  port: process.env.PORT || 5000,
  secret: process.env.SECRET,
  token_expires: process.env.TOKEN_EXPIRES,
  mail_user: process.env.MAIL_USER,
  mail_pass: process.env.MAIL_PASS,
  tamplate_id: process.env.TAMPLATE_ID,
  pim_client_id: process.env.PIM_CLIENT_ID,
  pim_secret: process.env.PIM_SECRET,
  pim_username: process.env.PIM_USERNAME,
  pim_password: process.env.PIM_PASSWORD,
  pim_url: process.env.PIM_URL,
  my_variable: process.env.MY_VARIABLE,
}
