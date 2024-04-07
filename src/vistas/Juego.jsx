import { useContext } from 'react';
import { GrupoTarjetas } from "../componentes/GrupoTarjetas.jsx";
import { Header } from "../componentes/header";
import { arrayPersonajes } from "../bd/basePersonajes.jsx";
import { ContextoGlobal, ContextoGlobalProvider } from "../context/ContextoGlobal.jsx";

export function Juego() {

    const ContadorGlobal = () => {
      const { contadorGlobal } = useContext(ContextoGlobal);

      return (
          <div>
              <h2>Contador Global de Clics: {contadorGlobal}</h2>
          </div>
      )
    }


    return (
        <>
            <Header />
            <ContextoGlobalProvider>
                <ContadorGlobal />
                <GrupoTarjetas base={arrayPersonajes} />
            </ContextoGlobalProvider>
        </>
    )
}


