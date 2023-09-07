import express from 'express'
import { create } from 'express-handlebars'
import path from 'path'
import routes from './routes/routes'
import morgan from 'morgan'

const app = express()

app.set('views', path.join(__dirname, 'views'))

const exphbs = create({
    layoutDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs',
})

app.engine('.hbs', exphbs.engine)

app.set('view engine', '.hbs')

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

//Rutas
app.use(routes)

export default app
