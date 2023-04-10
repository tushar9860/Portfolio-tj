import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #000;
  color: #fff;
`;

const FooterText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2023 Tushar Golkande. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
