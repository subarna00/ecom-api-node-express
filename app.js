require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const port = process.env.PORT || 5000;


// middleware
const routeNotFoundMiddleware = require("./middleware/not-found");
const errorHandelerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("success vayo ni");
})

app.use(routeNotFoundMiddleware)
app.use(errorHandelerMiddleware)

const start = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log("server started"))
    } catch (error) {
        console.log(error)
    }
}
start();