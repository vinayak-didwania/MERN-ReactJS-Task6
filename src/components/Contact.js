import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background: #f4f4f4;
  padding: 2rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <p>Contact information and form go here.</p>
    </ContactContainer>
  );
};

export default Contact;