import React, {useState} from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover=() => {
        setHover(!hover);
    }
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Bienvenido a la mejor alternativa de Transporte</HeroH1>
          <HeroP>
            Integridad, transparencia, y efectividad son los valores que nos identifican como compañía. <br /> ¿Qué esperas para transportar con nosotros?
          </HeroP>
          <HeroBtnWrapper>
            <Button to="contactenos"
                  smooth={true}
                  duration={700}
                  spy={true}
                  offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Contáctenos {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
