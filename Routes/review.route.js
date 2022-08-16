const express = require("express")
const router = express.Router()
const { getReview, postReview } = require("../Controller/review.controller")

router.get("/",getReview)
router.post("/",postReview)

module.exports = router