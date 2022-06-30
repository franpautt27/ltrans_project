import styled from "styled-components";

export const ContactContainer = styled.div`
  color: #fff;
  background: #010606;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const ContactColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const ContactColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ContactTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const ContactTopLine = styled.p`
  color: #68A4C4;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ContactHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const ContactSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`;
export const FormWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Form = styled.form`
  margin-top: 20px;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;

export const ServiceSelect = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;

export const SubjectInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;

export const MessageInput = styled.textarea`
width: 100%;
margin: 10px 0px;
font-size: 14px;
padding: 10px;
`;

export const ContactButton = styled.button`
  border: green 1px solid;
  padding: 15px;
  background-color: #68A4C4;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #68A4C4;
    background-color: #010606;
    border: #68A4C4 1px solid;
  }
`;
