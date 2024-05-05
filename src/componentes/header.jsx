import { Link } from "react-router-dom";

export function Header(){


  return (
      <>
        <div>
          <ul className="flex justify-center ">
              <li className="p-2 m-2 border border-black justify-center align-middle">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 m-2 border border-black justify-center align-middle">
                <Link to="/juego">Pokemons memory</Link>
              </li>
              <li className="p-2 m-2 border border-black justify-center align-middle">
                <Link to="/marvel">Marvel memory</Link>
              </li>
              <li className="p-2 m-2 border border-black justify-center align-middle">
                <Link to="/about">A cerca de</Link>
              </li>
          </ul>
          <h1 className="flex justify-center">MEMORY</h1>
        </div>

      </>
  )
}