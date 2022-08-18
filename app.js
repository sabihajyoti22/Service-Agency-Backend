require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./Routes/auth");
const order = require("./Routes/order.route")
const service = require("./Routes/service.route")
const review = require("./Routes/review.route")
const cookieSession = require("cookie-session");
const app = express();

// Google Auth
require("./Config/passport")

// Connect DB
require("./Config/db")

// CORS
app.use(
	cors()
);
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
	res.send("<h1>Try: 35</h1>")
})

app.use("/api/orders", order);
app.use("/api/servics", service);
app.use("/api/reviews", review);

module.exports = app