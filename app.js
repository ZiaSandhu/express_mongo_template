require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const { logger } = require("./middleware/logger");
const dbConnect = require("./database/config");
const mongoose = require("mongoose");
const Cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(Cors());
app.use(logger);

dbConnect();

app.use(express.json());
app.use("/api", routes);

app.use("*", (_, res) => {
  res.status(409).json({ message: "Invalid Request" });
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
