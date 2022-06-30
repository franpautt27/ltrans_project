import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaChartArea,
  FaTruck,
  FaHandshake,
  FaBusinessTime
} from "react-icons/fa";
import { Waypoint } from "react-waypoint";
import "./animatedCounter.css";

const AnimatedCounter = () => {
  let endTractoCamiones = 37;
  let endClientesActivos = 137;
  let endServiciosPromedio = 1200;
  let endExperiencia = 20;

  const [tractoCamiones, setTractoCamiones] = useState(null);
  const [clientesActivos, setClientesActivos] = useState(null);
  const [serviciosPromedio, setServiciosPromedio] = useState(null);
  const [experiencia, setExperiencia] = useState(null)

  const refTractoCamiones = useRef(0);
  const refClientesActivos = useRef(0);
  const refServiciosPromedio = useRef(0);
  const refExperiencia = useRef(0)

  const accumulatorTractocamiones = endTractoCamiones / 200;
  const accumulatorClientesActivos = endClientesActivos / 100;
  const accumulatorServiciosPromedio = endServiciosPromedio / 100;
  const accumulatorExperiencia = endExperiencia / 400;

  //* FUNCION PARA EL CONTEO DE AÑOS DE EXPERIENCIA
  const updateCounterExperiencia = () => {
    if (refExperiencia.current < endExperiencia) {
      const result = Math.ceil(refExperiencia.current + accumulatorExperiencia);
      if (result >= endExperiencia) return setExperiencia("+" + endExperiencia);
      setExperiencia(result);
      refExperiencia.current = result;
    }
    setTimeout(updateCounterExperiencia, 50);
  };

  //* FUNCION PARA EL CONTEO DE TRACTOCAMIONES
  
  const updateCounterTractoCamiones = () => {
    if (refTractoCamiones.current < endTractoCamiones) {
      const result = Math.ceil(refTractoCamiones.current + accumulatorTractocamiones);
      if (result >= endTractoCamiones) return setTractoCamiones(endTractoCamiones);
      setTractoCamiones(result);
      refTractoCamiones.current = result;
    }
    setTimeout(updateCounterTractoCamiones, 40);
  };

  //* FUNCION PARA EL CONTEO DE CLIENTES ACTIVOS
  const updateCounterClientesActivos = () => {
    if (refClientesActivos.current < endClientesActivos) {
      const result = Math.ceil(refClientesActivos.current + accumulatorClientesActivos);
      if (result >= endClientesActivos)
        return setClientesActivos(endClientesActivos);
      setClientesActivos(result);
      refClientesActivos.current = result;
    }
    setTimeout(updateCounterClientesActivos, 15);
  };

  //* FUNCION PARA EL CONTEO DE SERVICIOS PROMEDIO
  const updateCounterServiciosPromedio = () => {
    if (refServiciosPromedio.current < endServiciosPromedio) {
      const result = Math.ceil(refServiciosPromedio.current + accumulatorServiciosPromedio);
      if (result >= endServiciosPromedio)
        return setServiciosPromedio("+" + endServiciosPromedio);
      setServiciosPromedio(result);
      refServiciosPromedio.current = result;
    }
    setTimeout(updateCounterServiciosPromedio, 10);
  };

  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     updateCounterTractoCamiones();
  //   }

  //   return () => (isMounted = false);
  // }, [endTractoCamiones]);

  return (
    <Waypoint
      onEnter={ ()=>{
        updateCounterExperiencia()
        updateCounterTractoCamiones()
        updateCounterServiciosPromedio()
        updateCounterClientesActivos()
      } }
      onLeave={() => {
        setTractoCamiones(0);
        refTractoCamiones.current = 0;
        setClientesActivos(0)
        refClientesActivos.current = 0;
        setServiciosPromedio(0)
        refServiciosPromedio.current = 0;
        setExperiencia(0)
        refExperiencia.current = 0;
      }}
    >
      <section className="counters">
        <div className="counterContainer">
        <div>
            <FaChartArea className="icon" size={70} />
            <div className="counter" data-target="5000">
              {experiencia}
            </div>
            <h3>Años de experiencia</h3>
          </div>
          <div>
            <FaTruck className="icon" size={70} />
            <div className="counter" data-target="60000">
              {tractoCamiones}
            </div>
            <h3>Tractocamiones Propios</h3>
          </div>

          <div>
            <FaHandshake className="icon" size={70} />
            <div className="counter" data-target="15000">
              {clientesActivos}
            </div>
            <h3>Clientes Activos</h3>
          </div>

          <div>
            <FaBusinessTime className="icon" size={70} />
            <div className="counter" data-target="9000">
              {" "}
              {serviciosPromedio}
            </div>
            <h3>Servicios Promedio por mes</h3>
          </div>

          
        </div>
      </section>
    </Waypoint>
  );
};

export default AnimatedCounter;
