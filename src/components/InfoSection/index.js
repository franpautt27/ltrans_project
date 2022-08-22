import React from "react";
import { Button } from "../ButtonElements";
import {
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  TopLine,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  CertificationContainer,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  dark,
  dark2,
  linkTo
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={linkTo}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offsets={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img imgStart={imgStart} src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          {lightBg && (
          <>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 40, paddingTop:40}}>

          <h2 style={{color: "black"}}>Certificaciones:</h2>
          </div>
          <CertificationContainer>
            <img style={{width: 150}} src="./images/certificaciones/basc.png" alt="" />
            <img style={{width: 225}}  src="./images/certificaciones/iso9001.png" alt="" />
            <img  style={{width: 150}}  src="./images/certificaciones/iso45001.png" alt="" />
          </CertificationContainer>
          </>
        )}
        </InfoWrapper>
        
      </InfoContainer>
    </>
  );
};

export default InfoSection;
