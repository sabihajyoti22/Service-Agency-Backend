const mongoose = require("mongoose")

const ordersModel = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    useremail:{
        type: String,
        require: true
    },
    service:{
        type: String,
        require: true
    },
    projectDesc:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Orders",ordersModel)