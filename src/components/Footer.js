import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return <FooterContainer>&copy; 2023 Vinayak Didwania</FooterContainer>;
};

export default Footer;