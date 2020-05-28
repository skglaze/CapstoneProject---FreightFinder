const express = require('express');

const requestApi = require('../models/request');
const truckApi = require('../models/truck')

const requestRouter = express.Router();

requestRouter.get('/requests', (req, res) => {
    requestApi.getAllRequests()
        .then((requests) => {
            res.render('requestViews/requests', { requests })
        })
})

//get one request
requestRouter.get('/requests/:requestId', (req, res) => {
    requestApi.getOneRequest(req.params.requestId)
        .then((request) => {
            res.render('requestViews/oneRequest', { request })
        })
})

//create new request
requestRouter.post('/requests', (req, res) => {
    requestApi.addNewRequest(req.body)
        .then(truckApi.getAllTrucks(req.body)
            .then((trucks) => {
                let match = false;
                let index = 0;
                let truckMatch;
                let requestMatch;
                while (match == false && index < trucks.length) {
                    if (trucks[index].capacity > req.body.weight && trucks[index].location == req.body.pickupLocation) {
                        match = true;
                        truckMatch = trucks[index];
                        requestMatch = req.body
                    }
                    index = index + 1;
                }
                if (match === false) {
                    res.redirect('/requests')
                } else {
                    res.render('matchViews/match', { truckMatch, requestMatch })
                }
            }))
})

//delete a request
requestRouter.delete('./requests/requestId', (req, res) => {
    requestApi.deleteRequest(req.params.requestId)
        .then((deletedRequest) => {
            res.redirect('./requests')
        })
})
module.exports = {
    requestRouter
};