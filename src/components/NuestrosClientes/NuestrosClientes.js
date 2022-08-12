import React from "react";
import "./nuestrosClientes.css";


const NuestrosClientes = () => {
  return (
    <div className="carrouselBody" id="clientes">
      <h1 style={{color: "#0f479a"}} className="title">Nuestros Clientes</h1>
      <h3 >L-TRANS ofrece la mejor alternativa en el servicio de transporte de Carga suelta, paletizada y en contenedor.</h3>
      <h3>Nuestros clientes nos respaldan:</h3>
      <div className="slider">
        <div className="slide-track">
          {/* 6 SLIDES */}
          <div className="slide">
            <img className="slide-image" src="./images/empresas/almagrario.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/meico.png" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/monomeros.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/sempertex.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/smutfitkapa.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/tecnoglass.jpg" alt="" />
          </div>
          {/* 6 SLIDES */}
          <div className="slide">
            <img className="slide-image" src="./images/empresas/almagrario.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/meico.png" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/monomeros.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/sempertex.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/smutfitkapa.jpg" alt="" />
          </div>
          <div className="slide">
            <img className="slide-image" src="./images/empresas/tecnoglass.jpg" alt="" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default NuestrosClientes;
