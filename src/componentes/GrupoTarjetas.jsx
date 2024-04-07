import React, { useContext } from 'react';
import { Tarjeta } from "./Tarjeta";


export function GrupoTarjetas({ base }) {
    
    return (
        <>
            <div id="contenedorTarjetas" className="grid grid-cols-3 gap-4">
                {
                    base.map((item) => {
                        return (
                            <Tarjeta key={item.index} imagen={item.imagen} nombre={item.nombre}/>
                        )
                    })
                }
            </div>
        </>
    )
}
