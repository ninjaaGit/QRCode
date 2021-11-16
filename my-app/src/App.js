import React from 'react';
import './App.css';
import {IndexContext} from '../src/context/index'
import QRCodeCanvas from './QRCodeCanvas';



function App() {


  const { text, setText, nome, setNome, email, setEmail, numero, setNumero, rua, setRua, cidade, setCidade, estado, setEstado, cep, setCep, pais, setPais } = React.useContext(IndexContext);

  var nomeQR,
  element =  document.getElementById("nome")

  if(element != null) {
    nomeQR = element.value;
  }
  else {
    nomeQR = null;
  }

  var emailQR,
  element2 = document.getElementById("email")

  if(element2 != null) {
    emailQR = element2.value;
  }
  else {
    emailQR = null
  }

  var numeroQR,
  element3 = document.getElementById("telefone")

  if(element3 != null) {
    numeroQR = element3.value;
  }
  else {
    numeroQR = null
  }

  // var ruaQR,
  // element4 = document.getElementById("rua")

  // if(element4 != null) {
  //   ruaQR = element4.value;
  // }
  // else {
  //   ruaQR = null
  // }

  // var cidadeQR,
  // element5 = document.getElementById("cidade")

  // if(element5 != null) {
  //   cidadeQR = element5.value;
  // }
  // else {
  //   cidadeQR = null
  // }

  // var estadoQR,
  // element6 = document.getElementById("estado")

  // if(element6 != null) {
  //   estadoQR = element6.value;
  // }
  // else {
  //   estadoQR = null
  // }

  // var cepQR,
  // element7 = document.getElementById("cep")

  // if(element3 != null) {
  //   cepQR = element7.value;
  // }
  // else {
  //   cepQR = null
  // }

  // var paisQR,
  // element8 = document.getElementById("pais")

  // if(element8 != null) {
  //   paisQR = element8.value;
  // }
  // else {
  //   paisQR = null
  // }

  var vcard = null

  var vcard_begin = 'BEGIN:VCARD\nVERSION:3.0\n';
	var vcard_end = 'END:VCARD;';
	
	
	var nomeV = 'FN:' + nomeQR + '\n';
	
	var emailV = 'EMAIL:'+ emailQR + '\n';
	
	var telefoneV = 'TEL;TYPE=CELL:' + numeroQR + '\n';

  // var adr = "ADR;CHARSET=UTF-8;TYPE=HOME:;;" + ruaQR + ";" + cidadeQR + ";" + estadoQR + ";" + cepQR + ";" + paisQR + '\n'

  var vcard = vcard_begin+nomeV+emailV+telefoneV+vcard_end;


  console.log(vcard)

  return (
    <div className="index">
      <div className="divall">
          <div className="divInput">
              <input className="input" id="nome" placeholder="Nome" onChange={(element) => setNome(element.target.value)}></input>
              <input className="input" id="email" placeholder="Email" onChange={(element) => setEmail(element.target.value)}></input>
              <input className="input" id="telefone" placeholder="Celular" onChange={(element) => setNumero(element.target.value)}></input>
          </div>
              {/* <input id="rua" placeholder="Rua" onChange={(element) => setRua(element.target.value)}></input>
              <input id="cidade" placeholder="Cidade" onChange={(element) => setCidade(element.target.value)}></input>
              <input id="estado" placeholder="Estado" onChange={(element) => setEstado(element.target.value)}></input>
              <input id="cep" placeholder="CEP" onChange={(element) => setCep(element.target.value)}></input>
              <input id="pais" placeholder="País" onChange={(element) => setPais(element.target.value)}></input> */}

          <div>
          <div className="divValues">
              <input value={nomeQR}></input>
              <input value={emailQR}></input>
              <input value={numeroQR}></input>
          </div>

          <div className="qrcodediv">
              <QRCodeCanvas text={vcard}></QRCodeCanvas>
          </div>
          </div>
    </div>

        
    
    </div>
  );
}

export default App;
