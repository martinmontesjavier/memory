import React, { useContext, useState, useEffect } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";
import { Formulario } from "./Formulario.jsx";

export function Tarjeta({ id, imagen, nombre }) {
    const { 
        incrementarContadorGlobal, 
        base, setBase, 
        compararPersonajes, setCompararPersonajes, 
        tiempo, setTiempo, 
        puntuacion, setPuntuacion, 
        juego, setJuego,
        parejasEncontradas, setParejasEncontradas } = useContext(ContextoGlobal);
        
    const [contador, setContador] = useState(0);
    const [volteada, setVolteada] = useState(false); // Estado inicial de volteada

    useEffect(() => {
        let temporizador;
        if (compararPersonajes.length === 2) {
            if (compararPersonajes[0] === compararPersonajes[1]) {
                // console.log('¡Son iguales!');
                const idIgual = compararPersonajes[0];
                // const baseActualizada = base.map(pokemon => {
                //     if (pokemon.id === idIgual) {
                //         return { ...pokemon, volteada: true };
                //     }
                //     return pokemon;
                // });
                // // console.log("Base actualizada:", baseActualizada);
                // setBase(baseActualizada);
                setParejasEncontradas([...parejasEncontradas, idIgual]);
                setPuntuacion(puntuacion + 100);
                setCompararPersonajes([]);
            } else {
                temporizador = setTimeout(() => {
                    setCompararPersonajes([]);
                    if (!parejasEncontradas.includes(id)) {
                        setVolteada(false); // Restablecer el estado de la tarjeta solo si el ID no está en parejasEncontradas
                    }
                }, 1000);
            }
        }
    }, [compararPersonajes]);

    useEffect(() => {
        // Iniciar el contador cuando la primera tarjeta se gira
        if(juego == true) {
            const intervalo = setInterval(() => {
                setTiempo(tiempo - 1);
            }, 1000);
        
            // Detener el intervalo cuando el tiempo llega a cero
            if (tiempo === 0 || parejasEncontradas.length == 9) {
                clearInterval(intervalo);
                setJuego(false);
                console.log("Se acabó el tiempo");
                
            }
        
            // Limpiar el intervalo cuando el componente se desmonte o se actualice
            return () => clearInterval(intervalo);
        }
    }, [juego, tiempo, setTiempo, setJuego]);


    const handleClick = () => {
        if (!volteada && compararPersonajes.length < 2) {
            incrementarContadorGlobal();
            setContador(contador + 1);
            setVolteada(true); // Voltear la tarjeta solo si no está volteada
            setCompararPersonajes([...compararPersonajes, id]);
            // Aquí actualizamos el estado del juego
            setJuego(true);
        }
    };

    if(volteada == true){
        return(
            <div className="tarjeta bg-sky-400">
                <div onClick={handleClick} id={id} className="min-h-[400px] max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-[300px] h-[290px]" src={imagen} alt={nombre}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            {nombre}
                        </div>
                        <p>Clicks: {contador}</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="tarjeta bg-sky-400 hover:cursor-pointer">
                <div onClick={handleClick} id={id} className="min-h-[400px] max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-[300px] h-[400px]" src="https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg" alt="Dorso"/>
                </div>
            </div>
        )
    }

}
