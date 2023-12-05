import React from 'react'
import '../hojas-de-estilo/styles.css';
import { AiOutlineInstagram,AiFillFacebook,AiFillFlag } from "react-icons/ai";
import { Link } from 'react-router-dom';
function Testimonios({imagen,fotoDe,name,pais, ig, fb,especialidad,testimonio,empresa,pagina}) {
  return (

    <div className='contenedor-testimonio'>
        <img
        
        className='imagen-testimonio'
        src={require(`../Images/${imagen}.jpg`)}
        alt={(`foto de ${fotoDe}`)}
        />
       
        <div className='contenedor-texto-testimonio'>
<p className='nombre-testimonio'>
    <strong>{name}</strong> 
    
    <i class="em em-medical_symbol" aria-role="presentation" aria-label=""></i> 
</p>

<p className='cargo-testimonio'>
    {especialidad} realizo su formación academica en   <strong>{empresa} </strong>
    <br></br>
    
</p>
<div>
<Link to={ `${pagina}`}>Trayectoria</Link>
</div>
    {pais} 
    <AiFillFlag/>
    
  
<p className='texto-testimonio'>
    {testimonio}

</p>

<button class="instagram"onclick={ig}>
 
<a href={ig}>
  <i>
<AiOutlineInstagram/>
</i>
</a>
</button>

<button class="facebook"onclick={fb}>
 
<a href={fb}>
  <i>
<AiFillFacebook/>
</i>
</a>
</button>
        </div>

    </div>
  )
}

export default Testimonios