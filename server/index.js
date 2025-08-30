const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
require('dotenv').config();



const app = express()
app.use(cors())
app.use(express.json())


// mongoose.connect("mongodb://localhost:27017/auth")
mongoose.connect(process.env.MONGODB_URI)

// Hello
app.get('/', (req, res) => {
  res.send('Hello');
});

// API : Authentification
// API : Inscrire
app.post("/inscrire" , (req , res) => {
   UserModel.findOne({email : req.body.email})
   .then( user => {
    if(user) {
        res.json("Compte est déjà existe")
    }else{
        UserModel.create(req.body)
        .then( user =>  res.json("Compte est créé avec succès"))
        .catch( err => res.json(err))
    }
   }).catch(err => res.json(err))
})

// API : Connecter
app.post("/connecter" , (req , res) => {
    UserModel.findOne({email : req.body.email})
    .then( user => {
         if(!user) {
            res.json("Compte non existe!")
         }else{
            if(user.motdepasse === req.body.motdepasse){
                res.json("Connexion réussie")
            }else{
                res.json("Mot de passe est incorrect")
            }
         }
    }).catch(err => res.json(err))
})






app.listen("3001" , () => {
    console.log("Server is Running")
})