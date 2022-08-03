const mongoose = require("mongoose")

const serviceModel = mongoose.Schema({
    serviceName:{
        type: String,
        require: true
    },
    serviceDesc:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Services",serviceModel)