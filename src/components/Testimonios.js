import React from 'react'
import '../hojas-de-estilo/styles.css';
import { AiOutlineInstagram,AiFillFacebook } from "react-icons/ai";
function Testimonios(props) {
  return (
    <div className='contenedor-testimonio'>
        <img
        className='imagen-testimonio'
        src={require(`../Images/${props.imagen}.jpg`)}
        alt={(`foto de ${props.fotode}`)}
        />
        <div className='contenedor-texto-testimonio'>
<p className='nombre-testimonio'>
    <strong>{props.name}</strong> 
    <i class="em em-medical_symbol" aria-role="presentation" aria-label=""></i> 
     {props.pais}
</p>
<p className='cargo-testimonio'>
    {props.especialidad} realizo su formación academica en   <strong>{props.empresa} </strong>
</p>
<p className='texto-testimonio'>
    {props.testimonio}

</p>

<button class="instagram"onclick={props.ig}>
 
<a href={props.ig}>
  <i>
<AiOutlineInstagram/>
</i>
</a>
</button>

<button class="facebook"onclick={props.fb}>
 
<a href={props.fb}>
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