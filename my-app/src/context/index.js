import React, { createContext, useEffect, useState} from "react";
import domtoimage from 'dom-to-image';
export const IndexContext = createContext();


export default function IndexProvider({ children }) {
    const [text, setText] = useState("")
    const [nome, setNome] = useState(localStorage.getItem('nome'))
    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [numero, setNumero] = useState(localStorage.getItem('numero'))

    var nomeLocal = localStorage.setItem('nome', nome)

    var emailLocal = localStorage.setItem('email', email)

    var numeroLocal = localStorage.setItem('numero', numero)

    function handleSave() {
      var node = document.getElementById('dados');
      domtoimage.toPng(node).then(function (dataUrl) {
        var img = new Image();
        const link = document.createElement("a");
        var imgcomp = img.src = dataUrl;
        link.href = imgcomp
        link.setAttribute("download", "qrcode.png")
        link.click()
      })
      .catch(function (error) {
        console.error(error);
      });
    }

return (<IndexContext.Provider value={{text, setText, nome, setNome, email, setEmail, numero, setNumero, handleSave, nomeLocal, emailLocal, numeroLocal}}>
    {children}
  </IndexContext.Provider>);
}