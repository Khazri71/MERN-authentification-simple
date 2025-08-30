import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export const Inscrire = () => {



  const [nomutilisateur , setNomutilisateur] = useState()
  const [email , setEmail] = useState()
  const [motdepasse , setMotdepasse] = useState()
  const [message , setMessage] = useState()
  const navigate = useNavigate()


  const Inscrire = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/inscrire" , {nomutilisateur , email , motdepasse})
    .then( result => {
        console.log(result)
        setMessage(result.data)
        
        if(result.data === "Compte est créé avec succès"){
            navigate("/connecter")
        }

       })
    .catch(err => console.log(err))
  }


  return (
   <>
   
    <div className="d-flex justify-content-center align-items-center  vh-100  bg-primary-subtle">

<div className="w-50 bg-white p-3 rounded">
 <h2 className="mb-3">S'inscrire</h2>
    <form onSubmit={Inscrire}>
  <div className="mb-3">
    <label htmlFor="exampleInputnomutilisateur" className="form-label"> Nom utilisateur</label>
    <input type="text" className="form-control" id="exampleInputnomutilisateur"  placeholder="Entrer Nom utilisateur"
    onChange={(e) => setNomutilisateur(e.target.value)}
    
    />
  </div>


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

  <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
  {message && <p className="text-danger text-center fw-bold mt-3">{message}</p>}

   <div className="form-text mb-1">J'ai déjà un compte</div>
   <Link to="/connecter"  className="btn btn-secondary ">Se connecter</Link>



</form>

</div>
</div>
   
   
   </>
  )
}
