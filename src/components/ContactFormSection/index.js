import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import toast from 'react-simple-toasts';
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactColumn1,
  ContactTextWrapper,
  ContactTopLine,
  ContactHeading,
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
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x7v7g4a', 'template_4pasxzr', formRef.current,"cnx4LQIhVIT3iWYKk")
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          toast("Formulario enviado exitosamente!")
      }, (error) => {
          console.log(error.text);
          toast("Error enviando el formulario")
      });

  }

  return (
    <>
      <ContactContainer id="contactenos">
        <ContactWrapper>
          <ContactRow>
            <ContactColumn1>
              <ContactTextWrapper>
                <ContactTopLine>¡Contactenos!</ContactTopLine>
                <ContactHeading>Puedes dejar tus datos para que programemos una llamada o e-mail.</ContactHeading>
                
              </ContactTextWrapper>
            </ContactColumn1>
            <ContactColumn2>
              <FormWrap>
                <Form ref={formRef} onSubmit={handleSubmit} >
                  <NameInput required={true} type="text" name="nombre" placeholder="Nombre Completo"></NameInput>
                  <EmailInput required={true} type="email" name="email" placeholder="Email"></EmailInput>
                  <ServiceSelect required={true} type="text" name="servicio"  placeholder="Servicio requerido"></ServiceSelect>
                  <SubjectInput required={true} type="text" name="asunto" placeholder="Asunto"></SubjectInput>
                  <MessageInput required={true} type="text" name="mensaje" rows="5" placeholder="Mensaje"></MessageInput>
                  <ContactButton type="submit">Enviar</ContactButton>
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
