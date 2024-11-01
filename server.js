const express = require("express")
const UserRoute = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorHandler.js")

const app = express()
const PORT = 5050
app.use(express.json())

use("/resource".UserRoute)