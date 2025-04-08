import "Bootstrap/dist/css/bootstrap.min.css"
import { About, Contact, Home, Menu, NotFoundPage } from "./pages" /* Importe las paginas */
import {Routes,Route  } from "react-router-dom"; /* Importo Routes para abrazar las rutas y Route para realizar el enrutamiento de cada una */
import { Footer, NavBar } from "./components";

function App() {

  return (
    <>

      <NavBar/>

      <Routes> 
        <Route path="/" element={<Home/>} /> {/* Ruta asociada a la pagina */}
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />   
        <Route path="*" element={<NotFoundPage/>} /> {/* Cualquier otra ruta dirige al NotFoundPage */}
      </Routes>

      <Footer/> 
    </>
  )
}
export default App 
