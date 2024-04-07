import React, { useContext, useState } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";

export function Tarjeta({ imagen, nombre, id }) {
    const [contador, setContador] = useState(0);
    const { incrementarContadorGlobal } = useContext(ContextoGlobal);

    const incrementarContador = () => {
        setContador(contador + 1);
        incrementarContadorGlobal(); // Incrementar contador global
    };

    return (
        <div className="tarjeta">
            <div onClick={incrementarContador} id={id} className="min-h-[500px] max-w-sm rounded overflow-hidden shadow-lg">
                <p>Clicks: {contador}</p>
                <img className="w-[500px] h-[500px]" src={imagen} alt="Imagen" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{nombre}</div>
                </div>
            </div>
        </div>
    );
}
