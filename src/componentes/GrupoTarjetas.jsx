import React, { useContext } from 'react';
import { Tarjeta } from "./Tarjeta";
import { ContextoGlobal } from '../context/ContextoGlobal';


export function GrupoTarjetas() {
    
    const { base } = useContext(ContextoGlobal);


    return (
        <>
            <div id="contenedorTarjetas" className="grid grid-cols-6 gap-4">
                {
                    base.map((item) => {
                        return (
                            <Tarjeta key={item.index} imagen={item.imagen} nombre={item.nombre} id={item.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}