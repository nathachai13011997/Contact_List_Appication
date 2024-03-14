const configs = require("../../configs/app");
const axios = require('axios');

const methods = {
    async getAuthTokenForPim() {
        return new Promise(async (resolve, reject) => {
            const str = `${configs.pim_client_id}:${configs.pim_secret}`;
            const encodedString = btoa(str);
            const postData = {
                username: configs.pim_username,
                password: configs.pim_password,
                grant_type: 'password',
            };
            const result = await axios
            .post(`${configs.pim_url}/api/oauth/v1/token`, postData, {
                headers: {
                    'Content-Type': `application/json`,
                    Authorization: `Basic ${encodedString}`,
                },
            })
            .then((i) => i?.data?.access_token)
            .catch((e) => {
                reject(e)
            });
            resolve({token_akeneo : result})
        });
    },
}

module.exports = { ...methods }
