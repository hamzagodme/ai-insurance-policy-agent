require("dotenv").config("../.env");

const express = require("express");
const cors = require("cors");

const policyAssistantRoutes = require("./routes/policyAssistantRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", policyAssistantRoutes);

app.use(errorMiddleware);

module.exports = app;
