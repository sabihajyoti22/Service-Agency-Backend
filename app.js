require("dotenv").config();
const express = require("express");
const cors = require("cors");
const order = require("./Routes/order.route")
const service = require("./Routes/service.route")
const review = require("./Routes/review.route")
const app = express();

// Connect DB
require("./Config/db")

// CORS
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
	res.send("<h1>Tried Thousand Times</h1>")
})

app.use("/api/orders", order);
app.use("/api/services", service);
app.use("/api/reviews", review);

module.exports = app