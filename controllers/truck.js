const express = require('express');

const truckApi = require('../models/truck')

const truckRouter = express.Router();

//get all trucks
truckRouter.get('/trucks', (req, res) => {
    truckApi.getAllTrucks()
        .then((trucks) => {
            res.render('truckViews/trucks', { trucks })
        })
})

//get one truck
truckRouter.get('/trucks/:truckId', (req, res) => {
    truckApi.getOneTruck(req.params.truckId)
        .then((truck) => {
            res.render('truckViews/oneTruck', { truck })
        })
})

//create new truck
truckRouter.post('/trucks', (req, res) => {
    truckApi.addNewTruck(req.body)
        .then((newTruck) => {
            res.redirect('/trucks')
        })
})

//delete a truck
truckRouter.delete('./trucks/truckId', (req, res) => {
    truckApi.deleteTruck(req.params.truckId)
        .then((deletedTruck) => {
            res.redirect('./trucks')
        })
})
module.exports = {
    truckRouter
};