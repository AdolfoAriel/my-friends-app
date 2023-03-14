import Testimonios from './components/Testimonios';
import Title from './components/Title';
import Footer from './components/Footer';

import './App.css';
function App() {
  return (
    <>
<div className='App'>


<Title/>
  <div className='contenedor-principal'>
    
    <h2>  Conoce a nuestros destacados doctores</h2>
  
  <Testimonios
  fotode='Aileen'
  name='Aileen Leal Bravo'
  imagen='Ailee'
  especialidad='Medica General con especializada en Alergologia'
  testimonio=''
  empresa='BUAP'
  ig="https://www.instagram.com/aileen_lealbvo/"
  fb="https://www.facebook.com/aileen.leal.75"
  />
  <Testimonios
  fotode='Danna'
  name='Danna Gallardo Hernandez'
  imagen='Danna'
  especialidad='Medica General con especializada en Anestesiologia y reanimacion'
  testimonio=''
  empresa='BUAP'
  ig='https://www.instagram.com/gallardoh_danna/'
  fb="https://www.facebook.com/Dannayuv"
   />
  <Testimonios
  fotode='Dayana'
  name='Dayana Maceda Benitez'
  imagen='Dayana'
  especialidad='Medica General con especializada en Infectologia '
  testimonio=''
  empresa='BUAP'
  ig='https://www.instagram.com/dayanam_02/'
  fb="https://www.facebook.com/dayana.macedabenitez"
  />
  <Testimonios
  fotode='Jeremy'
  name='Jeremy Hernandez Saavaedra'
  imagen='jeremy'
  especialidad='Medico general con especialidad en cirugia cardiotoracica'
  testimonio=''
  empresa='BUAP'
  ig='https://www.instagram.com/jeremysaave/'
  fb="https://www.facebook.com/jeremy.hernandezsaavedra"
   />
   
  </div>

  

  </div>
  <Footer/>
  </>

  );
}

export default App;
