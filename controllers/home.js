const express = require('express')

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.render('homepage/homepage')
})

homeRouter.get('/comingSoon', (req, res) => {
    res.render('homepage/comingSoon')
})


module.exports = {
    homeRouter
}