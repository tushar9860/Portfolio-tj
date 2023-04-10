import React from 'react';
import styled from 'styled-components';

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  background-image: url(./img/new.jpg);
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
  color: white;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;

  margin-bottom: 0.5rem;
  `;
  
  const InputField = styled.input`
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
  `;
  
  const TextArea = styled.textarea`
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    height: 10rem;
    resize: none;
  `;
  
  const SubmitButton = styled.button`
    padding: 1rem 2rem;
    background-color: #fca311;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  
    &:hover {
      background-color: black;
      color: #fca311;
      border: 2px solid #fca311;
    }
  `;
  
  const ContactSection = () => {

    const Form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pghyvus', 'template_xj7786o', Form.current, 'Lz0tlOx5z0mQi21_X')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <ContactContainer id='contact' >
        <ContactTitle>Contact Me</ContactTitle>
        <ContactForm ref={Form} onSubmit={sendEmail}>
          <InputGroup>
            <InputLabel htmlFor="name">Name</InputLabel>
            <InputField type="text" id="name" name='user_name' required />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="email" id="email" name='user_email' required />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="message">Message</InputLabel>
            <TextArea id="message" required  name="message"/>
          </InputGroup>
          <SubmitButton type="submit" >Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    );
  };
  
  export default ContactSection;
  