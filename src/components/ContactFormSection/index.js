import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactColumn1,
  ContactTextWrapper,
  ContactTopLine,
  ContactHeading,
  ContactSubtitle,
  ContactColumn2,
  FormWrap,
  Form,
  NameInput,
  EmailInput,
  ServiceSelect,
  SubjectInput,
  MessageInput,
  ContactButton
} from "./ContactFormElements";

const ContactForm = () => {
  return (
    <>
      <ContactContainer id="contactenos">
        <ContactWrapper>
          <ContactRow>
            <ContactColumn1>
              <ContactTextWrapper>
                <ContactTopLine>¡Contactenos!</ContactTopLine>
                <ContactHeading>Puedes dejar tus datos para que programemos una llamada o e-mail.</ContactHeading>
                <ContactSubtitle>Buenasss</ContactSubtitle>
              </ContactTextWrapper>
            </ContactColumn1>
            <ContactColumn2>
              <FormWrap>
                <Form>
                  <NameInput placeholder="Nombre Completo"></NameInput>
                  <EmailInput placeholder="Email"></EmailInput>
                  <ServiceSelect placeholder="Servicio requerido"></ServiceSelect>
                  <SubjectInput placeholder="Asunto"></SubjectInput>
                  <MessageInput rows="5" placeholder="Mensaje"></MessageInput>
                  <ContactButton>Enviar</ContactButton>
                </Form>
              </FormWrap>
            </ContactColumn2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
