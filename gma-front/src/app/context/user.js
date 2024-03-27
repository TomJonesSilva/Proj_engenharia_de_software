"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 0,
    nome: "",
    nickName: "",
    imagem: "",
    imagemCapa: "",
  });

  const login = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
