import React, { useContext, useState } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";
import { supabase } from "../supabase/Supabase";

export function Formulario() {
    const { puntuacion, usuario, contadorGlobal } = useContext(ContextoGlobal);
    const [username, setUsername] = useState('');
    const [mostrarForm, setMostrarForm] = useState(false);
    const [partidaGuardada, setPartidaGuardada] = useState(false);

    const handleGuardarPartida = async () => {
        try {
            const { data, error } = await supabase
                .from('Memory Ranking')
                .insert([
                    {
                        Nombre: username,
                        Puntuación: puntuacion,
                        Email: usuario.email,
                        Clicks: contadorGlobal
                    },
                ]);
    
            if (error) {
                console.error('Error al guardar la partida:', error.message);
                return;
            }

            setPartidaGuardada(true);
        } catch (error) {
            console.error('Error al guardar la partida:', error.message);
        }
    };

    const reiniciarJuego = () => {
        window.location.reload();
    };

    const ensenyarForm = () => {
        setMostrarForm(true);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div className="text-center bg-white mt-10 p-8 rounded-lg">
            <h1 className="text-4xl font-bold text-red-700 mb-4">GAME OVER</h1>
            <p className="text-lg text-gray-800 mb-6">¿Quieres guardar la partida?</p>
            <div className="flex justify-center mb-6">
                <button className="bg-green-500 text-white px-4 py-2 mr-4 rounded-md hover:bg-green-600" onClick={ensenyarForm}>Sí</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={reiniciarJuego}>No</button>
            </div>
            {/* Formulario para guardar la partida */}
            {mostrarForm && (
                <div>
                    <form className="flex flex-col items-center">
                        <label htmlFor="username" className="text-lg mb-2">Ingresa un nick:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Nombre de usuario"
                            className="border border-gray-400 px-4 py-2 mb-4 rounded-md focus:outline-none w-64"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleGuardarPartida}>Guardar</button>
                    </form>
                </div>
            )}
            {partidaGuardada && (
                <div className="mt-4">
                    <p className="text-green-500 mb-2">Partida guardada exitosamente</p>
                    <button className="bg-black text-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black" onClick={reiniciarJuego}>¿Otra partidita?</button>
                </div>
            )}
        </div>
    );
}
