import { useContext } from "react";
import { ChatContext } from "./context/ChatProvider";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

const App = () => {
  const { usuario } = useContext(ChatContext);

  if (usuario.estado === null)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        Cargando...
      </div>
    );

  return (
    <div className="vh-100 d-flex justify-content-center bg-light">
      <div className="w-50 border">
        <Navbar />
        {usuario.estado ? (
          <Chat />
        ) : (
          <div className="lead text-center mt-5">Debes Iniciar Sesión</div>
        )}
      </div>
    </div>
  );
};

export default App;
