require("dotenv").config(); //loads all environment variables from .env
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log("DB CONNECTION ERROR: ", error));
db.once("open", () => console.log("Connected to database"));

// Setup server to accept json
app.use(express.json());

/**
 * Setup routes:
 * - add folder in root "routes"
 * - add ./routes/news.js, name to match the required route below
 */
const newsRouter = require("./routes/news");
app.use("/news", newsRouter);

app.listen(3000, () => console.log("server started"));
