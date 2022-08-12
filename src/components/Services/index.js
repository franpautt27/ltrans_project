import React from 'react'
import {ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements"
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-1.svg"
import Icon3 from "../../images/svg-1.svg"
import Camion from '../../images/camion.jpg'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Nuestros Servicios</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={"./images/IMG_6958.jpg"}/>
                <ServicesH2>Transporte de contenedores</ServicesH2>
                <ServicesP>Importación y exportación a Puertos de Barranquilla - Cartagena</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={"./images/DSC_0213.jpg"}/>
                <ServicesH2>Operaciones con SideLifter</ServicesH2>
                <ServicesP>Movilización, carga y descarga a piso contenedores</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={"./images/DSC_0842.jpg"}/>
                <ServicesH2>Transporte carga suelta {">"} 3.5 Ton y ligera {"(< 3.5 Ton.)"}</ServicesH2>
                <ServicesP>Carga de contenedores completos mayores a las 3.5 toneladas y ligeros</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services