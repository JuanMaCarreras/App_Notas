const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

//initializations
const app = express()

//Settigs
app.set('port', process.env.port || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine(
    '.hbs',
    exphbs.engine({
        extname: 'hbs',
        defaultLayout: false,
        layoutsDir: 'views/layouts/',
        patialsDir: path.join(app.get('views'), 'partials'),
    }),
)

app.set('view engine', '.hbs')
//Middlewares

//Global variables

//Routes
app.get('/', (req, res) => {
    res.render('index')
})

//Static files

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
