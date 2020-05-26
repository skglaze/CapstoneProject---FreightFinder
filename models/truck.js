const mongoose = require('mongoose');

global.sampleModel = [];

//Create Schema and Model
const FreightTruckSchema = new mongoose.Schema({
    Company: String,
    Capacity: Number,
    Location: String,
    Enroute: Boolean,
    InUse: Boolean,
});

const FreightTruck = mongoose.model('freightTruck', FreightTruckSchema);

const getAllTrucks = () => {
    return FreightTruck.find({})
}

const getOneTruck = (id) => {
    return FreightTruck.findById(id)
}

const addNewTruck = (newTruckData) => {
    return FreightTruck.create(newTruckData)
}

const updateTruck = (id, truckData) => {
    return FreightTruck.updateOne({ _id: id }, truckData)
}

const deleteTruck = (id) => {
    return FreightTruck.deleteOne({ _id: id })
}

module.exports = {
    getAllTrucks,
    getOneTruck,
    addNewTruck,
    updateTruck,
    deleteTruck
};