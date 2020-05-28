const express = require('express')

const matchRouter = express.Router();

matchRouter.get('/matchConfirmation', (req, res) => {
    res.render('matchViews/matchConfirmation')
})

module.exports = {
    matchRouter
}