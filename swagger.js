const swaggerAutogen = require("swagger-autogen")()
const outputFile = "./swagger_output.json"
const endpointsFiles = ["src/routes/api/index.js"]

const doc = {
  info: {
    version: "1.0.0",
    title: "Contact List Appication"
  },
  host: "",
  basePath: "/api",
  schemes: [],
  tags: [
    {
      name: "Token"
    },
    {
      name: "Group"
    },
    {
      name: "Sub"
    },
    {
      name: "Mail"
    },
    {
      name: "Pit"
    }
  ],
  definitions: {
    TokenRes: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzU4NzM5dfasImV4cCI6MTY3NTg3NTc1Nn0.ffjGPECWE5nOsda-bO4JvIQdJlEBHKal4vYZ7coD8HA"
    },
    GroupRes: {
      idGroupContact: 1,
      nameGroupContact: "Family"
    },
    GroupPostRes: {
      idGroupContact: 4,
      nameGroupContact: "Bank123"
    },
    MessageRes: {
      id: 51,
      content: "Hello admin",
      inbox_id: 1,
      conversation_id: 5,
      message_type: 0,
      content_type: "text",
      content_attributes: {},
      created_at: 1669862528000,
      private: false,
      source_id: null,
      sender: {
        additional_attributes: {},
        custom_attributes: {
          custom1: "test custom 1"
        },
        email: "0933333333@24fixer.com",
        id: 3,
        identifier: "fixer003",
        name: "Fixer 3",
        phone_number: "+66933333333",
        thumbnail: "",
        type: "contact"
      }
    },
    MessageReq: {
      $content: "Hello admin"
    },
    WebhookReq: {},
    CountRes: {
      count: 29
    },
    HealthRes: {
      message: "OK",
      uptime: "2022-12-01T13:39:24.797Z",
      version: "1.0.0"
    },
    SuccessRes: {
      message: "Successful"
    },
    NotFoundRes: {
      message: "No data found"
    },
    ErrorRes: {
      message: "Something went wrong."
    }
  }
}

swaggerAutogen(outputFile, endpointsFiles, doc)
