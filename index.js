const express = require('express');
const methodOverride = require('method-override');

//set up express app
const app = express();

const { truckRouter } = require('./controllers/truck.js')
const { homeRouter } = require('./controllers/home.js')
const { requestRouter } = require('./controllers/request')
const { matchRouter } = require('./controllers/match.js')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(methodOverride('_method'))

//static files
app.use(express.static(__dirname + "/public"))

//set up template engine
app.set('view engine', 'hbs');

app.use('/', truckRouter)
app.use('/', homeRouter)
app.use('/', matchRouter)
app.use('/', requestRouter)

//listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("The app is listening on port 3000");
})