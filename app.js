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

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE,PATCH",
		credentials: true,
	})
);
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/auth/google", passport.authenticate("google", { scope: ['profile', 'email'] }));

app.get("/auth/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	}),
);
app.get("/",(req,res)=>{
	res.send("<h1>Service Agency</h1>")
})

app.use("/user", authRoute);
app.use("/api/orders", order);
app.use("/api/servics", service);
app.use("/api/reviews", review);

module.exports = app