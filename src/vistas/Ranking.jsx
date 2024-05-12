import { useContext, useState, useEffect } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/Supabase.jsx";
import coronaImage from '../assets/corona.png';


export function Ranking() {
    const [rankingData, setRankingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('Memory Ranking')
                    .select('*')
                    .order('Puntuación', { ascending: false }); // Ordenar por puntuación de forma descendente

                if (error) {
                    throw error;
                }

                setRankingData(data);
            } catch (error) {
                console.error('Error al obtener datos del ranking:', error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const parseCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hour = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year}, ${hour}:${minutes}`;
    };

    return (
        <div className="bg-gray-100 w-full py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto mb-8 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                    <img src={coronaImage} alt="Antes del título" className="w-20 mr-4" />
                    <h1 className="text-7xl font-bold text-center text-gray-800">PokeRanking</h1>
                    <img src={coronaImage} alt="Después del título" className="w-20 ml-4" />
                </div>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold text-left">Nombre</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold text-left">Email</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold text-left">Puntuación</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold text-left">Clicks</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold text-left">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankingData.map((user, index) => (
                                <tr key={index}>
                                    {index === 0 ? (
                                        <td className="border border-gray-300 px-4 py-2 flex items-center">
                                            <img src={coronaImage} alt="Corona" className="w-8 mr-2" />
                                            {user.Nombre}
                                        </td>
                                    ) : (
                                        <td className="border border-gray-300 px-4 py-2">{user.Nombre}</td>
                                    )}
                                    <td className="border border-gray-300 px-4 py-2">{user.Email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.Puntuación}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.Clicks}</td>
                                    <td className="border border-gray-300 px-4 py-2">{parseCreatedAt(user.created_at)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
