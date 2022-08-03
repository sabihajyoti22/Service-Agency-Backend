const mongoose = require("mongoose")

const reviewModel = mongoose.Schema({
    clientName:{
        type: String,
        require: true
    },
    clientEmail:{
        type: String,
        require: true
    },
    serviceName:{
        type: String,
        require: true
    },
    serviceProvider:{
        type: String,
        require: true
    },
    comment:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model("Reviews",reviewModel)