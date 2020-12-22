require("dotenv").config();
const { PORT = 5500, NODE_ENV = "development" } = process.env;

//Brining in EXPRESS
const express = require('express')
const app = express()

// MONGO Connection
const mongoose = require('./DB/conn')

// CORS
const cors = require("cors")
// const corsOptions = require("./configs/cors.js");

//OTHER IMPORTS
const morgan = require("morgan");


// MIDDLEWARE
NODE_ENV === "production" ? app.use(cors()) : app.use(cors());
app.use(cors())
app.use(express.json());
app.use(morgan("tiny")); //logging


//CONTROLLERS
const drinkController = require("./controllers/drinks.js")
const syrupController = require("./controllers/syrups.js")
const toolController = require("./controllers/tools.js")
const videoController = require("./controllers/videos.js")
app.use("/drinks", drinkController)
app.use("/syrups", syrupController)
app.use("/tools", toolController)
app.use("/videos", videoController)





//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })
