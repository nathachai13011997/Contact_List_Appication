const { getAuthTokenForPim } = require("../services/akeneo/genAccressToken.service")
const { createProduct } = require("../services/akeneo/createProduct.service")
const moment = require("moment");

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
    },
    async onCreatetariff(req, res) {
    //   const item =  {
    //     "ID": 284530,
    //     "ROW_ID": "5b4a49e8-1153-454d-a69b-3cdb10ee0d45",
    //     "PROMOTION_CODE": null,
    //     "PHX_OFFERING_ID": "O22099003",
    //     "SUBSCRIBE_ACCESS_NUMBER": "*777*70#",
    //     "CHARGE_EXC_VAT": 37.38,
    //     "CHARGE_INC_VAT": 40.00,
    //     "PROMOTION_NAME": "5G Internet 40B Max Speed 1GB 205MB 1Day",
    //     "PROMOTION_SHORT_NAME_TH": "แพ็กเสริม 5G 40บาท เน็ต 1.2GB นาน 24ชม.",
    //     "PROMOTION_SHORT_NAME_EN": "65Baht 5G Internet 1GB Unlimited 10Mbps 24hours",
    //     "PROMOTION_DESCRIPTION_TH": "แพ็กเกจเสริม 5G ค่าบริการ 40บาท(รวมVAT) อินเทอร์เน็ต 1.2GB ใช้ได้นาน 24ชม. ส่วนเกินคิดตามแพ็กเกจหลัก",
    //     "PROMOTION_DESCRIPTION_EN": "5G On-top package fee 40Baht(Inc.VAT). Internet 1.2GB valid for 24hours. Excess usage will be charged as your main package.",
    //     "PACKAGE_DURATION": 1,
    //     "PACKAGE_DURATION_UNIT": "Days",
    //     "CUSTOMER_TYPE": "Pre-paid",
    //     "PRODUCT_CLASS": "On-Top Extra",
    //     "TARGET_CUSTOMER": "Change Charge Type (Convert)|Change Owner|Existing|New|Port In (Mobile Number Port)|Renew / Recall from Terminate",
    //     "PROMOTION_EFF_START_DT": "2022-02-19T17:00:00.000z",
    //     "PROMOTION_EFF_END_DT": "2036-08-30T17:00:00.000Z",
    //     "STATUS": "Active",
    //     "PIM_PROCESSED": 1,
    //     "LAST_PIM_PROCESSED_DTM": "2024-03-25T06:59:47.000Z",
    //     "FILE_NAME": "POMASS_16032024_02300001.json",
    //     "BATCH_ID": "e5bc60ed-68be-42cc-81fe-4ce7f9968a08"
    // }

        const item =  {
            "ID": 284527,
            "ROW_ID": "86ef7587-fa55-463e-9f84-b19039a3a115",
            "PROMOTION_CODE": "P240122843",
            "PHX_OFFERING_ID": "O2401P240122843",
            "SUBSCRIBE_ACCESS_NUMBER": "*777*7723##",
            "CHARGE_EXC_VAT": 60,
            "CHARGE_INC_VAT": 65,
            "PROMOTION_NAME": "5G_Internet In65B 1GB UL 1Day",
            "PROMOTION_SHORT_NAME_TH": "แพ็กเสริม 5G 65บาท เน็ต 1GB เน็ตเร็ว 10Mbps 24ชม.",
            "PROMOTION_SHORT_NAME_EN": "65Baht 5G Internet 1GB Unlimited 10Mbps 24hours",
            "PROMOTION_DESCRIPTION_TH": "แพ็กเกจเสริม 5G ค่าบริการ 65บาท(รวมVAT) อินเทอร์เน็ต 1GB พร้อมเน็ตไม่จำกัด เร็ว 10Mbps ใช้ได้ 24ชม.",
            "PROMOTION_DESCRIPTION_EN": "5G On-top package 65Baht(Inc.VAT). Internet 1GB and unlimited internet at speed 10Mbps. Valid for 24hours.",
            "PACKAGE_DURATION": 1,
            "PACKAGE_DURATION_UNIT": "Days",
            "CUSTOMER_TYPE": "Post-paid",
            "PRODUCT_CLASS": "On-Top Extra",
            "TARGET_CUSTOMER": "Change Charge Type (Convert)|Change Owner|Existing|New|Port In (Mobile Number Port)|Renew / Recall from Terminate",
            "PROMOTION_EFF_START_DT": "2024-01-29T10:00:00.000Z",
            "PROMOTION_EFF_END_DT": "2036-01-30T10:00:00.000Z",
            "STATUS": "Active",
            "PIM_PROCESSED": 1,
            "LAST_PIM_PROCESSED_DTM": "2024-03-25T06:59:47.000Z",
            "FILE_NAME": "POMASS_16032024_02300001.json",
            "BATCH_ID": "e5bc60ed-68be-42cc-81fe-4ce7f9968a08"
        }

        const tariffConstant = {
            PIM_GRANT_TYPE: 'password',
            PIM_AUTH_CONTENT_TYPE_JSON: 'application/json',
            PIM_AUTH_CONTENT_TYPE_AKENEO_JSON: 'application/vnd.akeneo.collection+json',
            PIM_AUTH_TOKEN_BASIC_PREFIX: 'Basic',
            PIM_AUTH_TOKEN_BEARER_PREFIX: 'Bearer',
            PIM_TARIFF_PLAN_FAMILY: 'tariff_plan_family',
            PIM_TARIFF_ADD_ON_FAMILY: 'tariff_addon_family',
            PIM_TARIFF_PLAN_CATEGORY: 'tariff_plan',
            PIM_TARIFF_ADD_ON_CATEGORY: 'tariff_addon',
            PIM_THAI_CURRENCY: 'THB',
            PIM_ENG_LOCALE: 'en_US',
            PIM_THAI_LOCALE: 'th_TH',
            PIM_TARIFF_PLAN_POST_PAID: 'post-paid',
            PIM_TARIFF_PLAN_POSTPAID: 'postpaid',
            PIM_TARIFF_PLAN_PRE_PAID: 'pre-paid',
            PIM_TARIFF_PLAN_PREPAID: 'prepaid',
            TARIFF_ADD_ON: 'ADD-ON',
            TARIFF_PLAN: 'TARIFF PLAN',
            MAIN_PRODUCT_CLASS: 'main',
          }

          function formatDate(dateString) {
            if (!dateString) {
              return '';
            }
            return moment(dateString).format('YYYYMMDDHH');
          }

        try{
            // 1667377823-2X9E
            // 1667377823-2X9Dw
            // 1667377823-2X9F // price : 3000
            const patchData = JSON.stringify({
                identifier: item.ROW_ID,
                // enabled: true,
                family: tariffConstant.PIM_TARIFF_ADD_ON_FAMILY,
                categories: [tariffConstant.PIM_TARIFF_ADD_ON_CATEGORY],
                values: {
                  price_exc_vat: [
                    {
                      locale: null,
                      scope: null,
                      data: [
                        {
                          amount: item.CHARGE_EXC_VAT,
                          currency: tariffConstant.PIM_THAI_CURRENCY,
                        },
                      ],
                    },
                  ],
                  price_inc_vat: [
                    {
                      locale: null,
                      scope: null,
                      data: [
                        {
                          amount: item.CHARGE_INC_VAT,
                          currency: tariffConstant.PIM_THAI_CURRENCY,
                        },
                      ],
                    },
                  ],
                  name: [
                    {
                      locale: tariffConstant.PIM_ENG_LOCALE,
                      scope: null,
                      data: item.PROMOTION_NAME,
                    },
                    {
                      locale: tariffConstant.PIM_THAI_LOCALE,
                      scope: null,
                      data: item.PROMOTION_NAME,
                    },
                  ],
                  tariff_class: [
                    {
                      locale: null,
                      scope: null,
                      data: item.PRODUCT_CLASS,
                    },
                  ],
                  customer_type: [
                    {
                      locale: null,
                      scope: null,
                      data: item.CUSTOMER_TYPE,
                    },
                  ],
                  item_end_date: [
                    {
                      locale: null,
                      scope: null,
                      data: formatDate(item.PROMOTION_EFF_END_DT),
                    },
                  ],
                  item_start_date: [
                    {
                      locale: null,
                      scope: null,
                      data: formatDate(item.PROMOTION_EFF_START_DT),
                    },
                  ],
                  plan_short_name: [
                    {
                      locale: tariffConstant.PIM_ENG_LOCALE,
                      scope: null,
                      data: item.PROMOTION_SHORT_NAME_EN,
                    },
                    {
                      locale: tariffConstant.PIM_THAI_LOCALE,
                      scope: null,
                      data: item.PROMOTION_SHORT_NAME_TH,
                    },
                  ],
                  tariff_billing_type: [
                    {
                        locale: null,
                        scope: null,
                        data: null,
                      },
                    // {
                    //     locale: tariffConstant.PIM_ENG_LOCALE,
                    //     scope: null,
                    //     data: null,
                    //   },
                    //   {
                    //     locale: tariffConstant.PIM_THAI_LOCALE,
                    //     scope: null,
                    //     data: null,
                    //   },
                  ],
                  tariff_duration_unit: [
                    {
                      locale: null,
                      scope: null,
                      data: item.PACKAGE_DURATION_UNIT,
                    },
                  ],
                  description: [
                    {
                      locale: tariffConstant.PIM_ENG_LOCALE,
                      scope: null,
                      data: item.PROMOTION_DESCRIPTION_EN,
                    },
                    {
                      locale: tariffConstant.PIM_THAI_LOCALE,
                      scope: null,
                      data: item.PROMOTION_DESCRIPTION_TH,
                    },
                  ],
                  tariff_duration: [
                    {
                      locale: null,
                      scope: null,
                      data: item.PACKAGE_DURATION,
                    },
                  ],
                  product_subtype: [
                    {
                      locale: tariffConstant.PIM_ENG_LOCALE,
                      scope: null,
                      data: item.CUSTOMER_TYPE,
                    },
                    {
                      locale: tariffConstant.PIM_THAI_LOCALE,
                      scope: null,
                      data: item.CUSTOMER_TYPE,
                    },
                  ],
                  type_of_product: [
                    {
                      locale: tariffConstant.PIM_ENG_LOCALE,
                      scope: null,
                      data: tariffConstant.TARIFF_ADD_ON,
                    },
                    {
                      locale: tariffConstant.PIM_THAI_LOCALE,
                      scope: null,
                      data: tariffConstant.TARIFF_ADD_ON,
                    },
                  ],
                  ussd_code: [
                    {
                      locale: null,
                      scope: null,
                      data: item.SUBSCRIBE_ACCESS_NUMBER,
                    },
                  ],
                },
                // fileName: item.FILE_NAME,
                // batchId: item.BATCH_ID,
              });
            const result = await getAuthTokenForPim(req, res);
            const createProductRes = await createProduct({ data: patchData, token: result?.token_akeneo});
            res.success(createProductRes)
        } catch (error) {
            res.error(error)
        }
    },
}

module.exports = { ...methods }
