const { getAuthTokenForPim } = require("../services/akeneo/genAccressToken.service")
const { createProduct } = require("../services/akeneo/createProduct.service")

const methods = {
    async onCreateProduct(req, res) {
        try{
            // 1667377823-2X9E
            // 1667377823-2X9Dw
            // 1667377823-2X9F // price : 3000
            const patchData = JSON.stringify({
                "identifier": "1667377823-2X9F",
                "family": "mypartnerfamily",
                "categories": ["partner3rd"],
                "values": {
                    "type_of_product": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "PARTNER3RD"
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "PARTNER3RD"
                    }
                    ],
                    "product_subtype": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "Connectivity"
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "Connectivity"
                    }
                    ],
                    "price": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": [
                        {
                            "amount": 3000,
                            "currency": "THB"
                        }
                        ]
                    }
                    ],
                    "name": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "iPhone"
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "ไอโฟน"
                    }
                    ],
                    "Sold_Company": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "Test Bank"
                    },
                    ],
                    "item_start_date": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "2023021418"
                    }
                    ],
                    "item_end_date": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "2023121818"
                    }
                    ],
                    "primary_image_url": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "https://apisgl.ais.co.th/api/v3/partner/static/products/niXfVjndBhJ/images/galleries/7m21FT6QH7c.jpeg"
                    }
                    ],
                    "thumbnail_url": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "https://apisgl.ais.co.th/api/v3/partner/static/products/niXfVjndBhJ/images/galleries/7m21FT6QH7c.jpeg"
                    }
                    ],
                    "url_subdirectory_1": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "phones"
                    }
                    ],
                    "url_subdirectory_2": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "APPLE/IP12"
                    }
                    ]
                }
            });
            const result = await getAuthTokenForPim(req, res);
            const createProductRes = await createProduct({ data: patchData, token: result?.token_akeneo});
            res.success(createProductRes)
        } catch (error) {
            res.error(error)
        }
    },
    async onCreateProductDevice(req, res) {
        try {
            // 1667377823-2X9G
            const patchData = JSON.stringify({
                "identifier": "1667377823-2X9G",
                "family": "device_family",
                "categories": ["handset"],
                "values": {
                    "product_id": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "395270" || null,
                    },
                    ],
                    "brand": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "Bankza007",
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "Bankza007",
                    },
                    ],
                    "model": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "PRO1164GB",
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "PRO1164GB",
                    },
                    ],
                    "sap_description": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "NEW LTE AP IPAD PRO 11 64GB-SILVER 01",
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "NEW LTE AP IPAD PRO 11 64GB-SILVER 01",
                    },
                    ],
                    "type_of_product": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "PARTNER3RD"
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "PARTNER3RD"
                    }
                    ],
                    "product_subtype": [
                    {
                        "locale": "en_US",
                        "scope": null,
                        "data": "Connectivity"
                    },
                    {
                        "locale": "th_TH",
                        "scope": null,
                        "data": "Connectivity"
                    }
                    ],
                    "company": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "BKK",
                    },
                    ],
                    "mat_type": [
                    {
                        "locale": null,
                        "scope": null,
                        "data": "Serial",
                    },
                    ]
                }
            });
            const result = await getAuthTokenForPim(req, res);
            const createProductRes = await createProduct({ data: patchData, token: result?.token_akeneo});
            res.success(createProductRes)
        } catch (error) {
            res.error(error)
        }
    },
    async onGenerateToken(req, res) {
        try{
            const result = await getAuthTokenForPim(req, res);
            res.success(result)
        } catch (error) {
            res.error(error)
        }
    }
}

module.exports = { ...methods }
