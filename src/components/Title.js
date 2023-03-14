import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/Title.css'
import { FaHandHoldingMedical } from "react-icons/fa";
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
     <h1>Hospital Meaden and Heaven <FaHandHoldingMedical/></h1>
    
    </header>
  );
}

export default Title;