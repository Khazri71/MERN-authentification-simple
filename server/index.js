const express= require('express')
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')
const UserModel = require('./models/User');
const DBConnect = require('./config/dbConnect');



const app = express()
app.use(cors())
app.use(express.json())



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





const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    // Connecter Database
    DBConnect();
    console.log(`server is running on port ${PORT}`)
})