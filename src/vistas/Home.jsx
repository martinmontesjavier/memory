import { useContext, useState } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";

export function Home() {
    const { usuario } = useContext(ContextoGlobal);
    const [mensaje, setMensaje] = useState("¡Adelante inicia sesión o registrate para poder jugar!");

    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">¡Bienvenido a Pokemon Memory!</h1>
                <h2 className="text-xl font-semibold mb-4">Normas del juego</h2>
                {usuario.email && <p className="text-gray-700">Hola, {usuario.email}.</p>}
                <p className="text-gray-700 mb-4">El juego del Memory consiste en un juego de cartas en el que tienes que hacer coincidir las cartas iguales.</p>
                <p className="text-gray-700 mb-4">El objetivo del juego es encontrar todas las parejas de cartas iguales en 20 segundos y así aparecer el primero en el ranking. Puedes voltear dos cartas en cada turno. Si las cartas coinciden, se mantendrán visibles. Si no coinciden, se darán la vuelta nuevamente.</p>
                <p className="text-gray-700 mb-4">¡Juega y diviértete!</p>
                {!usuario.email && <p className="text-2xl font-bold text-red-500 mt-5">{mensaje}</p>}
            </div>
        </div>
    );
}
