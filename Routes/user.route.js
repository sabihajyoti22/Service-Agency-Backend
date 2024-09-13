const express = require("express")
const { getUsers, profile, signUpUser, signInUser } = require("../Controller/user.controller")
const router = express.Router()

router.get("/", getUsers)
router.get("/:id", profile)
router.post("/signup", signUpUser)
router.post("/signin", signInUser)

module.exports = router