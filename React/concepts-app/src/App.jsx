import './App.css'
import {Saludo} from './Components/Saludo'
import { Chauchis } from './Components/Chauchis'
function App() {
    return (
    <>
    {/* SOY UN COMENTARIO DE JS DENTRO DEL HTML RETORNADO */}
      <h1>Holiwis desde el App</h1>
      <h2>FSJ25</h2>
      {/* Llamada a un componente */}

      <Saludo />
      <Chauchis/>

    </>
  )
}

export default App

