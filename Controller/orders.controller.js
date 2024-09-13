const { json } = require("express");
const orderSchema = require("../Model/orders.model")

const getOrders = async (req, res) => {
    try {
        const orders = await orderSchema.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const postOrders = (req, res) => {
    try {
        const newOrder = orderSchema({
            username: req.body.username,
            useremail: req.body.useremail,
            service: req.body.service,
            projectDesc: req.body.projectDesc,
            price: req.body.price,
        })
        newOrder.save()
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(500).send(error)
    }
}
const deleteOrders = async (req, res) => {
    try {
        await orderSchema.deleteOne({ _id: req.params.id })
        res.status(203).send("<h1>Order Deleted</h1>")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { getOrders, postOrders, deleteOrders }