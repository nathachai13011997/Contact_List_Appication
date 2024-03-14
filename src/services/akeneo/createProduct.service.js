const configs = require("../../configs/app");
const axios = require('axios');

const methods = {
    async createProduct({ data, token }) {
        return new Promise(async (resolve, reject) => {
            const result = await axios
                .patch(`${configs.pim_url}/api/rest/v1/products`, data, {
                    headers: {
                    'Content-Type': `application/vnd.akeneo.collection+json`,
                    Authorization: `Bearer ${token}`,
                    },
                })
                .then((i) => i?.data)
                .catch((e) => {
                    reject(e)
                });
                resolve(result)
        });
    },
    async createProductModels({ data, token }) {
        return new Promise(async (resolve, reject) => {
            const result = await axios
                .patch(`${configs.pim_url}/api/rest/v1/product-models`, data, {
                    headers: {
                    'Content-Type': `application/vnd.akeneo.collection+json`,
                    Authorization: `Bearer ${token}`,
                    },
                })
                .then((i) => i?.data)
                .catch((e) => {
                    reject(e)
                });
                resolve(result)
        });
    },
}

module.exports = { ...methods }
