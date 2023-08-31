const express = require('express')
const path = require('path')

//initializations
const app = express()

//Settigs
app.set('port', process.env.port || 3000)
app.set('views', path.join(__dirname, 'views'))

//Middlewares

//Global variables

//Routes
app.get('/', (req, res) => {
    res.send('Hola Mundo!!')
})

//Static files

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
