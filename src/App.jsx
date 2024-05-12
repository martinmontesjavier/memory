import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from './componentes/header'
import { ContextoGlobal, ContextoGlobalProvider } from './context/ContextoGlobal'
import './index.css'
import { Juego } from './vistas/Juego'
import { Home } from "./vistas/Home"
import { Ranking } from "./vistas/Ranking"
import { Marvel } from "./vistas/Marvel"
import { Login } from "./vistas/Login"
import { Registro } from "./vistas/Registro"

function App() {

  return (
    <>
    <ContextoGlobalProvider>
      <Router>
        <Header className="container-fluid"></Header>
        <div className="container mx-auto">
        <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/ranking" element={<Ranking/>}></Route>
              <Route path="/juego" element={<Juego/>}></Route>
              {/* <Route path="/marvel" element={<Marvel/>}></Route> */}
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/registro" element={<Registro/>}></Route>
        </Routes>
      </div>
      </Router>
    </ContextoGlobalProvider>
    </>
  )
}

export default App
