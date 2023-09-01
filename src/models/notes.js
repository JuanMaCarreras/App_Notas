const { Schema, model } = require('mongoose')

//Escrutura de nuetra Collection (MongoDB)
const Notes = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

module.export = model('Notes', Notes)
