require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/config/swagger");
const routes = require("./src/routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware lar
app.use(cors());
app.use(express.json());



// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// API marshrutlar
app.use("/", routes);

const authRoutes = require("./src/routes/auth");
app.use("/api/auth", authRoutes);


app.listen(PORT, "0.0.0.0", () => console.log(`🚀 Server ${PORT}-portda ishga tushdi`));

