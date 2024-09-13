const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    useremail: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("User", userModel)