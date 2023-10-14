import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: url('your-hero-image.jpg') center/cover no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <h2>Welcome to My Portfolio</h2>
    </HeroContainer>
  );
};

export default HeroSection;