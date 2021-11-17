import React from 'react';
import './App.scss';
import {IndexContext} from '../src/context/index'
import QRCodeCanvas from './QRCodeCanvas';
import {ReactComponent as DownloadSVG} from './SVGs/download.svg'

function App() {

  const { setNome, setEmail, setNumero} = React.useContext(IndexContext);

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

  var vcard_begin = 'BEGIN:VCARD\nVERSION:3.0\n';
	
  var vcard_end = 'END:VCARD;';
	
	var nomeV = 'FN:' + nomeQR + '\n';
	
  var nV = 'N:' + ";" + nomeQR + ";"  + '\n';

	var emailV = 'EMAIL:'+ emailQR + '\n';
	
	var telefoneV = 'TEL;TYPE=CELL:' + numeroQR + '\n';

  var orgV = 'ORG:' + "Arcom" + '\n';

  var urlV = 'URL;TYPE=WORK:' + "https://www.arcom.com.br" + '\n';

  var roleV = 'ROLE:' + "Analista" + '\n';

  var adrV = "ADR;TYPE=WORK:" + "Arcom - Anel Viario Ayrton Senna, 2001 - Distrito Industrial, Uberlandia - MG, 38402-329" + '\n'

  var vcard = vcard_begin+nomeV+nV+emailV+telefoneV+orgV+adrV+urlV+vcard_end;

  console.log(vcard)

  function downloadPDF(){    
    var link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = document.getElementById("canvas").toDataURL()
    link.click()
  }

  return (
    <div className="QRCodeDivAll">
        <div className="QRCodeDivInput">
            <input className="QRCodeInput" id="nome" placeholder="Nome" onChange={(element) => setNome(element.target.value)}></input>
            <input className="QRCodeInput" type="email" id="email" placeholder="Email" onChange={(element) => setEmail(element.target.value)}></input>
            <input className="QRCodeInput" type="number" placeholderid="telefone" placeholder="Celular" onChange={(element) => setNumero(element.target.value)}></input>
        </div>
        <div className="QRCodeDivContainerPai">
          <div className="QRCodeDivContainer">
            <div id="dados" className="QRCodeDiv">
                <h1 className="QRCodeNome">{nomeQR || "Seu Nome"}</h1>
                <QRCodeCanvas text={vcard}></QRCodeCanvas>
            </div>
            <button onClick={downloadPDF}>
              DOWNLOAD
              <DownloadSVG/>
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
