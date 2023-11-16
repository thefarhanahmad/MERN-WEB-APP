const express = require("express");
const app = express();

// importing dotenv to access info from .env file
require("dotenv").config();

// middleware
app.use(express.json());

// mounting router
const router = require("./routes/routes");
app.use("/api/auth", router);

// database connecting
const dbConnection = require("./config/dbConnect");
dbConnection();

// app is listening and starting
const PORT = 4000;
app.listen(PORT, () => {
  console.log("App is running at port", PORT);
});
