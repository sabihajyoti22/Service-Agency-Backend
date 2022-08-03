const express = require("express")
const { getOrders, postOrders, deleteOrders } = require("../Controller/orders.controller")
const router = express.Router()

router.get("/",getOrders)
router.post("/",postOrders)
router.delete("/:id",deleteOrders)

module.exports = router