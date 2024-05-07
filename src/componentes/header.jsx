import { Link } from "react-router-dom";

export function Header(){


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
              <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                <Link to="/juego" className="text-yellow-500">Pokemons memory</Link>
              </li>
              <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                <Link to="/marvel" className="text-yellow-500">Marvel memory</Link>
              </li>
              <li className="p-2 m-2 border border-black justify-center align-middle bg-black">
                <Link to="/about" className="text-yellow-500">A cerca de</Link>
              </li>
          </ul>
        </div>

      </div>
  )
}