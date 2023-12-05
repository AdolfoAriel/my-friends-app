import React from 'react'
import lab from '../Images/hospital.jpg'

function Servicios() {
  return (
    <div className='contenedor-principal-servicios'>
      <h1>Servicios</h1>
      <img
      className='imagen-hospital'
      src={lab}
      alt='lab'
      
      />
    </div>
  )
}

export default Servicios