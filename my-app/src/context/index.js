import React, { createContext, useEffect, useState} from "react";
export const IndexContext = createContext();

export default function IndexProvider({ children }) {
    const [text, setText] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero] = useState("")


return (<IndexContext.Provider value={{text, setText, nome, setNome, email, setEmail, numero, setNumero}}>
    {children}
  </IndexContext.Provider>);
}