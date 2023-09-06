import { connect } from 'mongoose'
;(async () => {
    try {
        const db = await connect('mongodb://0.0.0.0:27017/notes-app')
        console.log('DB connect', db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()
