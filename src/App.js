import Testimonios from './components/Testimonios';
import Title from './components/Title';
import Footer from './components/Footer';
import Ejercicios1 from './components/Ejercicios'
import './App.css';

function App() {
  return (
    <>
<div className='App'>


<Title/>
  <div className='contenedor-principal'>
    
    <h2>  Conoce a nuestros destacados doctores</h2>
  
  <Testimonios
  fotoDe='Aileen'
  name='Aileen Leal Bravo'
  pais=' Mexico'
  imagen='Ailee'
  especialidad='Medica General con especializada en Alergologia'
  testimonio=''
  empresa='BUAP'
  ig="https://www.instagram.com/aileen_lealbvo/"
  fb="https://www.facebook.com/aileen.leal.75"
  />
  <Testimonios
  fotoDe='Danna'
  pais=' Mexico'

  name='Danna Gallardo Hernandez'
  imagen='Danna'
  especialidad='Medica General con especializada en Anestesiologia y reanimacion'
  testimonio=''
  empresa='BUAP'
  ig='https://www.instagram.com/gallardoh_danna/'
  fb="https://www.facebook.com/Dannayuv"
   />
  <Testimonios
  fotoDe='Dayana'
  name='Dayana Maceda Benitez'
  pais=' Venezuela'

  imagen='Dayana'
  especialidad='Medica General con especializada en Infectologia '
  testimonio=''
  empresa='BUAP'
  ig='https://www.instagram.com/dayanam_02/'
  fb="https://www.facebook.com/dayana.macedabenitez"
  />
  <Testimonios
  fotoDe='Jeremy'
  name='Jeremy Hernandez Saavaedra'
  pais=' Mexico'

  imagen='jeremy'
  especialidad='Medico general con especialidad en cirugia cardiotoracica'
  testimonio=''
  empresa='BUAP'
  ig='https://www.instagram.com/jeremysaave/'
  fb="https://www.facebook.com/jeremy.hernandezsaavedra"
   />
   <Testimonios
   fotoDe='Adolfo'
   name='Adolfo Ariel Negreros Jonapa'
   pais=' Mexico'

   imagen= 'Adolfo'
   especialidad= 'Medico general con especialidad en neurocirugia'
   testimonio=' '
   empresa='BUAP'
   ig='https://www.instagram.com/whosadolfoariel/?img_index=1'
   fb='https://www.facebook.com/adolfo.nj.3/'
   />
  </div>

  
<Ejercicios1/>
  </div>
  <Footer/>
  </>

  );
}

export default App;
