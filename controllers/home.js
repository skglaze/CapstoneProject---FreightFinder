const express = require('express')

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.render('homepage/homepage')
})

module.exports = {
    homeRouter
}