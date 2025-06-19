import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatProvider";

const Add = () => {
  const { agregarMensaje, usuario } = useContext(ChatContext);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) {
      console.log("mensaje vacío");
      return;
    }
    agregarMensaje(usuario.uid, mensaje);
    setMensaje("");
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="position-fixed bottom-0 mb-3 bg-dark p-3 rounded d-flex w-50"
        onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Escribe un mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Add;
