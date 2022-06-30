import React from "react";
import "./nuestrosClientes.css";


const NuestrosClientes = () => {
  return (
    <div className="carrouselBody" id="clientes">
      <h1 className="title">Nuestros Clientes</h1>
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
