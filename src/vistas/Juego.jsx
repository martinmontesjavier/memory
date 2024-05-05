import { useContext, useEffect } from 'react';
import { GrupoTarjetas } from "../componentes/GrupoTarjetas.jsx";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";

export function Juego() {
    const { contadorGlobal, setBase, tiempo, puntuacion } = useContext(ContextoGlobal);

    useEffect(() => {
        async function obtenerPokemons() {
            const fetchPromises = Array.from({ length: 9 }, async () => {
                try {
                    let id = Math.floor(Math.random() * 898) + 1;
                    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                    const respJSON = await resp.json();

                    return {
                        id: respJSON.id,
                        nombre: respJSON.name,
                        imagen: respJSON.sprites.front_default,
                        volteada: false,
                    };
                } catch (error) {
                    console.log('Ha ocurrido un error', error);
                    throw error; // Propagate the error
                }
            });

            try {
                const pokemonProvisional = await Promise.all(fetchPromises);

                const array18 = [...pokemonProvisional, ...pokemonProvisional].map((pokemon, index) => ({
                    ...pokemon,
                    index: index + 1 // Índice basado en 1
                }));

                const shuffledArray = array18.sort(() => Math.random() - 0.5);

                setBase(shuffledArray); // Actualizamos estado con la lista de pokemons
            } catch (error) {
                console.error('Error al obtener los pokemons', error);
            }
        }

        obtenerPokemons();
    }, [setBase]); // Se ejecuta solo cuando setBase cambia

    

    return (
        <>
            <div className='flex justify-center flex-col items-center'>
                <h2>Contador Global de Clics: {contadorGlobal}</h2>
                <h2>Tiempo Restante: {tiempo}</h2>
                <h2>Puntuación: {puntuacion}</h2>
            </div>
            <GrupoTarjetas />
        </>
    );
}
