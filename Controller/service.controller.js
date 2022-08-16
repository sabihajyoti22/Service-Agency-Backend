const serviceSchema = require("../Model/service.model")

const getService = async (req,res)=>{
    try {
        const service = await serviceSchema.find()
        res.status(200).json(service)
    } catch (error) {
        res.status(500).send(error)
    }
}
const postService = (req,res)=>{
    try {
        const newSevice = serviceSchema({
            serviceName: req.body.serviceName,
            serviceDesc: req.body.serviceDesc,
        })
        newSevice.save()
        res.status(201).json(newSevice)
    } catch (error) {
        res.status(500).send(error)
    }
}
const updateService = async (req,res)=>{
    try {
        const selectedService = await serviceSchema.findOne({id: req.params.id})
       selectedService.serviceName = req.body.serviceName
       selectedService.serviceDesc = req.body.serviceDesc
       await selectedService.save()
       res.status(202).send("<h1>Updated one user</h1>")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {getService, postService, updateService}