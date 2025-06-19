import { useContext } from "react";
import { ChatContext } from "../context/ChatProvider";

const Navbar = () => {
  const { usuario, ingresoUsuario, cerrarSesion } = useContext(ChatContext);

  return (
    <nav className="navbar navbar-dark bg-dark p-2 rounded">
      <span className="navbar-brand">Chat</span>
      <div className="me-2">
        {!usuario?.estado ? (
          <button
            className="btn btn-outline-success my-2 me-2"
            onClick={ingresoUsuario}>
            Acceder
          </button>
        ) : (
          <button
            className="btn btn-outline-danger my-2"
            onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
