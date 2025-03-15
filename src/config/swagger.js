const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Word Memorization API",
            version: "0.0.1",
            description: "WORD Memoorization API",
        },
        servers: [
            {
                url: "http://localhost:5555"
            }
        ]
    },
    apis: ["./routes/*.js"] // API endpointlari joylashgan fayllar
};



const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerDocs;
