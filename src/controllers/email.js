const { sendMail } = require('../services/email.service')

const methods = {
    async sendMail(req, res) {
        try {
            const result = await sendMail(req.body)
            console.log('result: ', result);
            res.success('success');
        } catch(error) {
            res.error(error)
        }
    }
}

module.exports = { ...methods }