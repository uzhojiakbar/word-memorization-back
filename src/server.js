const express = require("express");
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const wordRoutes = require("./routes/word.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swagger.config");

const app = express();
app.use(cors());
app.use(express.json());
// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/words", wordRoutes);


app.listen(process.env.PORT,"0.0.0.0", () => console.log(`🚀 Server ${process.env.PORT} portda ishga tushdi!`));
console.log(`📖 Swagger UI: http://localhost:${process.env.PORT}/api-docs`);
