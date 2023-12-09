import React from 'react';
import lab from '../Images/hospital.jpg';
import cons from '../Images/consulta.jpg';
import ciru from '../Images/cirujia.jpg';
import fisio from '../Images/fisioterapia.jpg';
import '../hojas-de-estilo/servicios.css';

function Servicios() {
  return (
    <div className='contenedor-principal-servicios'>
      <h1 style={{margin:'auto', padding:'2cm'}}>Servicios</h1>
      <img
      className='imagen-hospital'
      src={lab}
      alt='lab'
      
      />
      <p className='servicios-frase'>
        Consulta 
      </p>
      <img
      className='imagen-hospital'
      src={cons}
      alt='const'
      />
      <p className='servicios-frase'>
        Cirujia
      </p>
      <img
      className='imagen-hospital'
      src={ciru}
      alt={ciru}
      />
      <p className='servicios-frase'>
        Fisioterapia
      </p>
      <img
      className='imagen-hospital'
      src={fisio}
      alt='fisio'
      />
    </div>
  )
}

export default Servicios