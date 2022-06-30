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
                <ServicesIcon src={Camion}/>
                <ServicesH2>Transporte de contenedores</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Camion}/>
                <ServicesH2>Operaciones con SideLifter</ServicesH2>
                <ServicesP> You can access our platform anywhere in the world</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Camion}/>
                <ServicesH2>Transporte desde Puertos</ServicesH2>
                <ServicesP>Unlock our special memberhip card that returns 5% cash back</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services