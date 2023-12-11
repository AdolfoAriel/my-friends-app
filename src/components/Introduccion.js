import React from "react";
import Logo from "../Images/logo.jpg";

function Introduccion() {
  return (
    <div className="contenedor-introduccion">
      <h1 className="introduccion-h1">
        What we are in this moment and what we’re going
        <br />
        The health is the complete and fullness
      </h1>
      <div className="contenedor-imagen-inicio">
        <img className="imagen-inicio" alt="logo" src={Logo} style={{}} />
      </div>

      <p className="introduccion-p">
       " La salud es un derecho fundamental de todos los seres humanos.
        <br />
        Es el estado de completo bienestar físico, mental y social,
        <br />
        y no solo la ausencia de enfermedad. <br />
        La salud es esencial para el desarrollo individual y social, y es un
        factor clave para la prosperidad de las naciones."
      </p>
    </div>
  );
}

export default Introduccion;
