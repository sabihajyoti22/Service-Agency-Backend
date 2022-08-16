const reviewSchema = require("../Model/review.model")

const getReview = async (req,res)=>{
    try {
        const review = await reviewSchema.find()
        res.status(200).json(review)
    } catch (error) {
        res.status(500).send(error) 
    }
}

const postReview = (req,res)=>{
    try {
        const newReview = reviewSchema({
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail,
            serviceName: req.body.serviceName,
            serviceProvider: req.body.serviceProvider,
            comment: req.body.comment,
        })
        newReview.save()
        res.status(201).json(newReview)
    } catch (error) {
        res.status(500).send(error) 
    }
}

module.exports = {getReview,postReview}