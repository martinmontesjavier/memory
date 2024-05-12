import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/Supabase.jsx";
import React, { useEffect } from 'react';

export function Header() {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(ContextoGlobal);


    async function logout() {
        try {
            await supabase.auth.signOut(); // Cerrar la sesión
            setUsuario({}); 
            navigate('/login'); // Redireccionar al usuario después del cierre de sesión
            //console.log(usuario.email)
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    }

    

    if (!usuario.email) {
        return (
            <div className="container-fluid bg-red-700 ">
                <div className="flex justify-end border border-black p-5">
                    <ul className="flex">
                        <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/login" className="text-yellow-500">Login</Link>
                        </li>
                        <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/registro" className="text-yellow-500">Registro</Link>
                        </li>
                    </ul>
                </div>
                <div className="bg-white border border-black p-5">
                    <ul className="flex justify-center ">
                        <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/" className="text-yellow-500">Home</Link>
                        </li>
                        {/* <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/juego" className="text-yellow-500">Pokemons memory</Link>
                        </li> */}
                        {/* <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/marvel" className="text-yellow-500">Marvel memory</Link>
                        </li> */}
                        <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/ranking" className="text-yellow-500">Ranking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container-fluid bg-red-700 ">
                <div className="flex justify-end border border-black p-5">
                    <p className="text-white p-2 m-2">{usuario.email}</p>
                    <button className="p-2 m-2 border border-black justify-center align-middle bg-black text-yellow-500" onClick={logout}>Logout</button>
                </div>
                <div className="bg-white border border-black p-5">
                    <ul className="flex justify-center ">
                        <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/" className="text-yellow-500">Home</Link>
                        </li>
                        <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/juego" className="text-yellow-500">Pokemons memory</Link>
                        </li>
                        {/* <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/marvel" className="text-yellow-500">Marvel memory</Link>
                        </li> */}
                        <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                            <Link to="/ranking" className="text-yellow-500">Ranking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
