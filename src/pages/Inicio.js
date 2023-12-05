import React from 'react'
import Testimonios from '../components/Testimonios'
import all from '../Images/all.jpg'
function Inicio() {
  return (
    

<div className='contenedor-principal'>
    
    
    <Testimonios
    fotoDe='Aileen'
    name='Aileen Leal Bravo'
    pais=' Mexico'
    imagen='Ailee'
    pagina= 'Aileen'
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
    pagina='Danna'
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
    pagina='Dayana'
    imagen='Dayana'
    especialidad='Medica General con especializada en Infectologia '
    testimonio=''
    empresa='BUAP'
    ig='https://www.instagram.com/dayanam_02/'
    fb="https://www.facebook.com/dayana.macedabenitez"
    />
    <Testimonios
    fotoDe='Jeremy'
    pagina='Jeremy'
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
     pais='Mexico'
     pagina='Adolfo'

  
     imagen = 'Adolfo'
     especialidad= 'Medico general con especialidad en neurocirugia'
     testimonio=' '
     empresa='BUAP'
     
     ig='https://www.instagram.com/whosadolfoariel/?img_index=1'
     fb='https://www.facebook.com/adolfo.nj.3/'
     />

     <div className='all'>
        <img
        className='todos-foto'
        src={all}
        alt='todos'
        />
      
     </div>
    </div>
  )
}

export default Inicio