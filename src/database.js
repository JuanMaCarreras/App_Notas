const mongoose = require('mongoose')

const MONGOOSE_URI = process.env.MONGOOSE_URI

//Coneccion con la base de datos
mongoose
    .connect(MONGOOSE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database is connected')
    })
    .catch(error => {
        console.log(error)
    })
