import express from 'express'
import { create } from 'express-handlebars'
import path from 'path'
import router from './routes/routes'

const app = express()

app.set('views', path.join(__dirname, 'views'))

const exphbs = create({
    layoutDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs',
})

app.engine('.hbs', exphbs.engine)

app.set('view engine', '.hbs')

app.use(router)

export default app
