const { generate } = require('../services/genAccressToken.service')

const methods = {
    async onGenerateAccressToken(req, res) {
        try {
            const result = await generate(req.body)
            res.success(result);
        } catch(error) {
            res.error(error)
        }
    }
}

module.exports = { ...methods }