import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from './componentes/header'
import { ContextoGlobal, ContextoGlobalProvider } from './context/ContextoGlobal'
import './index.css'
import { Juego } from './vistas/Juego'
import { Home } from "./vistas/Home"
import { AcercaDe } from "./vistas/AcercaDe"
import { Marvel } from "./vistas/Marvel"

function App() {

  return (
    <>
    <ContextoGlobalProvider>
      <Router>
        <div className="container mx-auto">
        <Header></Header>
        <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<AcercaDe/>}></Route>
              <Route path="/juego" element={<Juego/>}></Route>
              <Route path="/marvel" element={<Marvel/>}></Route>
        </Routes>
      </div>
      </Router>
    </ContextoGlobalProvider>
    </>
  )
}

export default App
