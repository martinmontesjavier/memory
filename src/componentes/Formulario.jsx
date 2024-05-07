export function Formulario(){


    return (
        <div className="text-center bg-white">
            <h1 className="text-4xl font-bold text-red-700 mb-4">GAME OVER</h1>
            <p className="text-lg text-gray-800 mb-4">¿Quieres guardar la partida?</p>
            <div className="flex justify-center mb-4">
                <button className="bg-green-500 text-white px-4 py-2 mr-4 rounded-md hover:bg-green-600">Sí</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">No</button>
            </div>
            {/* Formulario para guardar la partida */}
            <div>
                <form className="flex flex-col items-center">
                    <label htmlFor="username" className="text-lg mb-2">Ingresa tu nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Nombre de usuario"
                        className="border border-gray-400 px-4 py-2 mb-4 rounded-md focus:outline-none"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Guardar</button>
                </form>
            </div>
        </div>
    );
    
    
} 