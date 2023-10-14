import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background: #f4f4f4;
  padding: 2rem;
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>My name is Vinayak Didwania</p>
    </AboutContainer>
  );
};

export default AboutSection;