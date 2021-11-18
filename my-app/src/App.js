import React from 'react';
import './App.scss';
import {IndexContext} from '../src/context/index'
import QRCodeCanvas from './QRCodeCanvas';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {ReactComponent as DownloadSVG} from './SVGs/download.svg'
import {ReactComponent as LogoSVG} from './SVGs/logo.svg'

function App() {

  const { setNome, setEmail, setNumero, handleSave, nomeLocal, emailLocal, numeroLocal} = React.useContext(IndexContext);

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

  return (
    <div className="QRCodeDivAll">
        <div className="QRCodeDivInput">
            <LogoSVG/>
            <Input color="success" className="QRCodeInput" value={localStorage.getItem('nome')} id="nome" placeholder="Nome" onChange={(element) => setNome(element.target.value)}></Input>
            <Input color="success" className="QRCodeInput" value={localStorage.getItem('email')} type="email" id="email" placeholder="Email" onChange={(element) => setEmail(element.target.value)}></Input>
            <Input color="success" className="QRCodeInput" value={localStorage.getItem('numero')} type="number" placeholderid="telefone" placeholder="Celular" onChange={(element) => setNumero(element.target.value)}></Input>
        </div>
        <div className="QRCodeDivContainerPai">
          <div className="QRCodeDivContainer">
            <div id="dados" className="QRCodeDiv">
                <h1 className="QRCodeNome">{localStorage.getItem('nome') || "Seu Nome"}</h1>
                <QRCodeCanvas text={vcard}></QRCodeCanvas>
            </div>
            <Button color="success" onClick={handleSave}>
              DOWNLOAD
              <DownloadSVG/>
            </Button>
          </div>
        </div>
    </div>
  );
}

export default App;
