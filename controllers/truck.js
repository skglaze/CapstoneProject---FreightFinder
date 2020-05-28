const express = require('express');

const truckApi = require('../models/truck')
const requestApi = require('../models/request')

const truckRouter = express.Router();

//get all trucks
truckRouter.get('/trucks', (req, res) => {
    truckApi.getAllTrucks()
        .then((trucks) => {
            console.log(trucks)
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
        .then(requestApi.getAllRequests(req.body)
            .then((requests) => {
                let match = false;
                let index = 0;
                let truckMatch;
                let requestMatch;
                while (match == false && index < requests.length) {
                    if (requests[index].weight < req.body.capacity && requests[index].pickupLocation == req.body.location) {
                        match = true;
                        truckMatch = req.body;
                        requestMatch = requests[index];
                    }
                    index = index + 1;
                }
                if (match === false) {
                    res.redirect('/trucks')
                } else {
                    res.render('matchViews/match', { truckMatch, requestMatch })
                }
            }))
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