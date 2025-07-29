import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export const Connecter = () => {


  const [email , setEmail] = useState()
  const [motdepasse  , setMotdepasse] = useState()
  const navigate = useNavigate()


  const Connecter = (e) => {
     e.preventDefault()
     axios.post("http://localhost:3001/connecter" , {email , motdepasse})
     .then( result => {
      console.log(result)
      navigate("/acceuil")
     })
     .catch( err => console.log(err))
  }






  return (
    
    <div className="d-flex justify-content-center align-items-center  vh-100 bg-primary-subtle">

<div className="w-50 bg-white p-3 rounded">
 <h2 className="mb-3">Se connecter</h2>
    <form  onSubmit={Connecter}>

  <div className="mb-3">
    <label htmlFor="exampleInputemail" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputemail"  placeholder="Entrer Email" 
    onChange={(e) => setEmail(e.target.value)}
    
    />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputmotdepasse" className="form-label">Mot de passe</label>
    <input type="password" className="form-control" id="exampleInputmotdepasse"  placeholder="Entrer Mot de passe"
    onChange={(e) => setMotdepasse(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-secondary w-100">Se connecter</button>

   <div className="form-text mb-1">Je n'ai pas de compte</div>
   <Link to="/"  className="btn btn-primary ">S'inscrire</Link>



</form>

</div>
</div>
   
  )
}
