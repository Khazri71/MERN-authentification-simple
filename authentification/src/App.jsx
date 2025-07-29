import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes , Route } from 'react-router'
import { Inscrire } from './components/Inscrire'
import { Connecter } from './components/Connecter'
import { Acceuil } from './components/Acceuil'
function App() {


  return (
     <div>
     <BrowserRouter>
     <Routes>
      <Route  path="/"  element={<Inscrire/>}   />
      <Route  path="/connecter"  element={<Connecter/>}  />
      <Route path="/acceuil"  element={<Acceuil/>} />
     </Routes>
     </BrowserRouter>
     </div>
  )
}

export default App
