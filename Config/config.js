require("dotenv").config()

const dev = {
    app:{
        port: process.env.PORT || 5000 
    },
    db:{
        url: process.env.DATABASE || "mongodb://localhost:27017/"
    },
    googleAuth:{
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
}

module.exports = dev