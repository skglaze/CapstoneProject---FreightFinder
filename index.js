const express = require('express');

//set up express app
const app = express();

const { truckRouter } = require('./controllers/truck.js')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

//static files
app.use(express.static(__dirname + "/public"))

//set up template engine
app.set('view engine', 'hbs');

app.use('/', truckRouter)

//listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("The app is listening on port 3000");
})