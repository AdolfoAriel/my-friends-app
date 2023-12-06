import React from 'react'
import Logo from '../Images/logo.jpg'

function Introduccion() {
  return (
    <div className='contenedor-introduccion'>
        <h1  style={{'text-align':'center','fontFamily':'glory'}}>
        What we are in this moment and what we’re going 
The health is the complete and fullness
        </h1>
        <img
        alt='logo'
        src={Logo}
        />
         <p style={{'textAlign':'center', }}>
            
La salud es un derecho fundamental de todos los seres humanos. Es el estado de completo bienestar físico, mental y social, y no solo la ausencia de enfermedad. La salud es esencial para el desarrollo individual y social, y es un factor clave para la prosperidad de las naciones.
         </p>
    </div>
    
  )
}

export default Introduccion