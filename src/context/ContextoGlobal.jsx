import { createContext, useState } from "react";
import { supabase } from "../supabase/Supabase";
// Creamos el contexto (la bolsa donde meter los estados)
export const ContextoGlobal = createContext()

// Creamos el proveedor del contexto

export function ContextoGlobalProvider({ children }){

    const [contadorGlobal, setContadorGlobal] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [compararPersonajes, setCompararPersonajes] = useState([]);
    const [base, setBase] = useState([]);
    const [tiempo, setTiempo] = useState(20);
    const [juego, setJuego] = useState(false)
    const [parejasEncontradas, setParejasEncontradas] = useState([]);
    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    })


    const incrementarContadorGlobal = () => {
      setContadorGlobal(contadorGlobal + 1);
    };

    async function inicio(){
        try {
            // leo el usuario logueado
            const { data: { user } } = await supabase.auth.getUser()
            if(user){
                setUsuario({
                    email: user.email,
                    imagen: user.avatar,
                    userid: user.id
                })
            }
            
            //console.log('data de login', user)
        } catch (error) {
            console.log('Error en login', error)
        }
    }
    inicio()
 


    return(
        <ContextoGlobal.Provider value={{
            contadorGlobal, setContadorGlobal, incrementarContadorGlobal,
            puntuacion, setPuntuacion,
            compararPersonajes, setCompararPersonajes,
            tiempo, setTiempo,
            base, setBase,
            juego, setJuego,
            parejasEncontradas, setParejasEncontradas,
            usuario, setUsuario

        }}>
            {children}
        </ContextoGlobal.Provider>
    )

}
