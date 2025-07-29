import React from 'react'
import { Link } from 'react-router'

export const Acceuil = () => {
  return (
    <>
    <div  className="d-flex justify-content-center align-items-center vh-100 bg-primary-subtle  flex-column">
    <h1>
       Bienvenue 
    </h1>
      <Link to="/connecter"  className="btn btn-success" >Déconnecter</Link>
    </div>
    </>
  )
}
