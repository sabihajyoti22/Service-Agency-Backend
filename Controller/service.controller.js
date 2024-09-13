const serviceSchema = require("../Model/service.model")

const getServices = async (req, res) => {
    try {
        const service = await serviceSchema.find()
        res.status(200).json(service)
    } catch (error) {
        res.status(500).send(error)
    }
}
const createService = (req, res) => {
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
const updateService = async (req, res) => {
    try {
        const selectedService = await serviceSchema.findOne({ _id: req.params.id })
        selectedService.serviceName = req.body.serviceName
        selectedService.serviceDesc = req.body.serviceDesc
        await selectedService.save()
        res.status(202).json(selectedService)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteService = async (req, res) => {
    try {
        await serviceSchema.deleteOne({ _id: req.params.id })
        res.status(202).send('Deleted one service')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { getServices, createService, updateService, deleteService }