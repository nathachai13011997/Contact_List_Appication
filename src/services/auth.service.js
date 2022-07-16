const jwt = require('jsonwebtoken'),
      configs = require('../configs/app');

const methods = {
    
    accessToken(){
        return jwt.sign({}, configs.secret, { expiresIn: configs.token_expires });
    },

    validateAccessToken(token) {
        try {
            return jwt.verify(token, configs.secret) ? true : false;
        } catch(error) {
            return false
        }
    }

}

module.exports = { ...methods };