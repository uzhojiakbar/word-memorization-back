const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API (JWT & SQLite3)",
            version: "1.0.0",
            description: "Bu API autentifikatsiya va JWT ishlatish uchun yozilgan"
        },
        servers: [
            {
                url: "http://37.27.215.130:5015",
                description: "Real server"
            },
            {
                url: "http://localhost:5015",
                description: "Local server"
            }
        ],
        components: {
            schemas: {
                WordDTO: {
                    type: "object",
                    required: ["eng", "uz"],
                    properties: {
                        eng: { type: "string", description: "Inglizcha so‘z" },
                        uz: { type: "string", description: "O‘zbekcha so‘z" },
                        date: {
                            type: "string",
                            format: "date",
                            description: "So‘z qo‘shiladigan sana (YYYY-MM-DD), kiritilmasa bugungi sana bo‘ladi",
                            example: "2024-03-16"
                        }
                    }
                },
                userDTO: {
                    type: "object",
                    properties: {
                        fullname: { type: "string", description: "Foydalanuvchi ismi" },
                        phonenumber: { type: "string", description: "Telefon raqam (998901234567)" },
                        password: { type: "string", description: "Parol (kamida 6 ta belgi)" }
                    },
                    userDTO: {
                        type: "object",
                        properties: {
                            fullname: { type: "string", description: "Foydalanuvchi ismi" },
                            phonenumber: { type: "string", description: "Telefon raqam (998901234567)" },
                            role: { type: "string", description: "Foydaluvchi roli, user,chief" },
                        }
                    },
                },
                RegisterDTO: {
                    type: "object",
                    required: ["fullname", "phonenumber", "password"],
                    properties: {
                        fullname: { type: "string", description: "Foydalanuvchi ismi" },
                        phonenumber: { type: "string", description: "Telefon raqam (998901234567)" },
                        password: { type: "string", description: "Parol (kamida 6 ta belgi)" }
                    },
                },
            },
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
    },
    apis: ["./src/routes/*.js"] // Route-lardagi Swagger annotatsiyalarni o‘qiydi
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerDocs;
