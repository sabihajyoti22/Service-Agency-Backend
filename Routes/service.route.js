const express = require("express")
const { getServices, createService, updateService, deleteService } = require("../Controller/service.controller")
const router = express.Router()

router.get("/", getServices)
router.post("/", createService)
router.patch("/:id", updateService)
router.delete("/:id", deleteService)

module.exports = router