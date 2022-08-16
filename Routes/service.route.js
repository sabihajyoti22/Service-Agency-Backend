const express = require("express")
const { getService, postService, updateService } = require("../Controller/service.controller")
const router = express.Router()

router.get("/",getService)
router.post("/",postService)
router.patch("/:id",updateService)

module.exports = router