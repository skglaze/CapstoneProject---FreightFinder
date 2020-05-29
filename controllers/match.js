const express = require('express')

const matchRouter = express.Router();

matchRouter.get('/matchConfirmation', (req, res) => {
    res.render('matchViews/matchConfirmation')
})

matchRouter.get('/matchDenied', (req, res) => {
    res.render('matchViews/matchDenied')
})

module.exports = {
    matchRouter
}