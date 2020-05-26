const mongoose = require('mongoose');

global.sampleModel = [];

//create request Schema and Model
const RequestSchema = new mongoose.Schema({
    company: String,
    freightWeight: Number,
    pickupLocation: String,
    destinationLocation: String
})

const FreightRequest = mongoose.model('freightRequest', RequestSchema);

const getAllRequests = () => {
    return FreightRequest.find({})
}

const getOneRequest = (id) => {
    return FreightRequest.findById(id)
}

const addNewRequest = (newRequestData) => {
    return FreightRequest.create(newRequestData)
}

const updateRequest = (id, gameData) => {
    return FreightRequest.updateOne({ _id: id }, requestData)
}

const deleteRequest = (id) => {
    return FreightRequest.deleteOne({ _id: id })
}

module.exports = {
    getAllRequests,
    getOneRequest,
    addNewRequest,
    updateRequest,
    deleteRequest
}