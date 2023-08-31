const mongoose = require('mongoose')

const MONGOOSE_URI = 'mongodb://localhost:27017/prueba'

mongoose
    .connect(MONGOOSE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(db => {
        console.log('Database is connected')
    })
    .catch(error => {
        console.log(error)
    })
