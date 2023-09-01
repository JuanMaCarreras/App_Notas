const { Schema, model } = require('mongoose')
const bcrypt = requier('bcrypt')

//Escrutura de nuetra Collection (MongoDB)
const Users = new Schema(
    {
        name: { type: string, required: true },
        mail: { type: string, required: true },
        password: { type: string, required: true },
    },
    {
        timestamps: true,
    },
)

//Cifrado de las contraseñas
Users.methods.encryptPassword(async password => {
    const salt = await bcrypt.genSalt(20)
    return await bcrypt.hash(password, salt)
})

//verifica si la contraseña que pone el usuario coincide con la guardada en la base de datos
Users.methods.matchPassword(async function (password) {
    return await bcrypt.compare(password, this.password)
})

module.exports = model('User', Users)
