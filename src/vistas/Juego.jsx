import { useContext, useEffect } from 'react';
import { GrupoTarjetas } from "../componentes/GrupoTarjetas.jsx";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";
import { Formulario } from '../componentes/Formulario.jsx';

export function Juego() {
    const { contadorGlobal, setBase, tiempo, puntuacion, parejasEncontradas, setParejasEncontradas, juego } = useContext(ContextoGlobal);

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
                    throw error; 
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

    if (!juego) {
        if (tiempo === 0 || parejasEncontradas.length === 9) {
            return <Formulario />;
        }
    }

    return (
        <>
            <div className='flex justify-center items-center py-4 px-6 '>
                <h2 className="bg-white mr-4 p-2 text-yellow-600 font-bold">Contador Global de Clics: {contadorGlobal}</h2>
                <h2 className="bg-white mr-4 p-2 text-yellow-600 font-bold">Tiempo Restante: {tiempo}</h2>
                <h2 className="bg-white p-2 text-yellow-600 font-bold">Puntuación: {puntuacion}</h2>
            </div>
            <GrupoTarjetas />
        </>
    );
}
