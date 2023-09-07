import { Schema, model } from 'mongoose'

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trime: true,
        },
        description: {
            type: String,
            required: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
)

export default model('note', noteSchema)
