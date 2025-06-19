import Add from "./Add";

import { ChatContext } from "../context/ChatProvider";
import { useContext, useEffect, useRef } from "react";

const Chat = () => {
  const { mensaje, usuario, cargarMensaje } = useContext(ChatContext);
  const refZoneChat = useRef(null);

  useEffect(() => {
    if (usuario.estado) {
      cargarMensaje();
    }
    refZoneChat.current.scrollTop = refZoneChat.current.scrollHeight;
  }, [usuario.estado, cargarMensaje]);

  return (
    <div
      className="mt-3 px-2"
      ref={refZoneChat}
      style={{ height: "75vh", overflowY: "scroll" }}>
      {mensaje.length > 0 ? (
        <>
          {mensaje.map((item, index) =>
            (usuario.uid === item.uid) & mensaje ? (
              <div className="d-flex justify-content-end mb-2" key={index}>
                <span className="badge bg-primary rounded-pill">
                  {item.texto}
                </span>
              </div>
            ) : (
              <div className="d-flex justify-content-start mb-2" key={index}>
                <span className="badge bg-secondary rounded-pill">
                  {item.texto}
                </span>
              </div>
            )
          )}
          <Add />
        </>
      ) : (
        <>
          <div className="vh-100 d-flex justify-content-center align-items-center">
            No hay mensajes para mostrar
          </div>
          <Add />
        </>
      )}
    </div>
  );
};

export default Chat;
