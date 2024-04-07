export function Header(){


    return (
        <>
          <div>
            <ul className="flex justify-center ">
                <li className="p-2"><button id="btnHome" className="p-2 border border-black">Home</button></li>
                <li className="p-2"><button id="btnPokemons" className="p-2 border border-black">Pokemons Memory</button></li>
                <li className="p-2"><button id="btnMarvel" className="p-2 border border-black">Marvel Memory</button></li>
                <li className="p-2"><button id="btnAcerca" className="p-2 border border-black">A cerca de</button></li>
            </ul>
            <h1>MEMORY</h1>
          </div>

        </>
    )
}