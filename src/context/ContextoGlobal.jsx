import { createContext, useState } from "react";

// Creamos el contexto (la bolsa donde meter los estados)
export const ContextoGlobal = createContext()

// Creamos el proveedor del contexto

export function ContextoGlobalProvider({ children }){

    const [contadorGlobal, setContadorGlobal] = useState(0);

    const incrementarContadorGlobal = () => {
      setContadorGlobal(contadorGlobal + 1);
    };


    return(
        <ContextoGlobal.Provider value={{
            contadorGlobal, setContadorGlobal, incrementarContadorGlobal
        }}>
            {children}
        </ContextoGlobal.Provider>
    )

}
