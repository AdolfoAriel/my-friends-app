import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/Title.css'
import { FaHandHoldingMedical } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Title() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
  
     <h1 className='contenedor-titulo'>Hospital Meaden and Heaven <FaHandHoldingMedical/>
     </h1>
     <div style={{backgroundColor:'#579498'}}>
    <Link   style={{marginRight:'5cm',marginLeft:'13.4cm'}}  to="/">Inicio</Link>
    <Link style={{marginRight:'5cm'}}   to="Servicios">Servicio</Link>
    <Link style={{marginRight:'5cm'}}  to="Contacto">Contacto</Link>
    </div>
    </header>
  );
}

export default Title;