const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nomutilisateur : String , 
    email : String,
    motdepasse : String

})


const UserModel = mongoose.model("users" , UserSchema)

module.exports = UserModel