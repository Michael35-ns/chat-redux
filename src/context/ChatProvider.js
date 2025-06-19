import { createContext, useEffect, useState } from "react";
import { db, auth, provider } from "../firebase";
export const ChatContext = createContext();

const ChatProvider = (props) => {


  const [usuario, setUsuario] = useState({
    uid: null,
    email: null,
    estado: null,
  });

  const [mensaje, setMensaje] = useState([]);

  useEffect(() => {
    detectarUser();
  }, []);

  const detectarUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario({ uid: user.email, email: user.email, estado: true });
      } else {
        setUsuario({ uid: null, email: null, estado: false });
      }
    });
  };

  const ingresoUsuario = async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  const cerrarSesion = () => {
    auth.signOut();
  };

  const cargarMensaje = () => {
    db.collection("chat")
      .orderBy("fecha")
      .onSnapshot((query) => {
        const arrayMensajes = query.docs.map((item) => item.data());
        setMensaje(arrayMensajes);
      });
  };

  const agregarMensaje = async (uid, texto) => {
    try {
      await db.collection("chat").add({
        fecha: Date.now(),
        texto: texto,
        uid: uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        usuario,
        ingresoUsuario,
        cerrarSesion,
        mensaje,
        agregarMensaje,
        cargarMensaje,
      }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
