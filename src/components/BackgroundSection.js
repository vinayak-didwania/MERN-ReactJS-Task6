// src/components/BackgroundSection.js
import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background: url('./background.jpg') center/cover no-repeat;
  height: 400px; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BackgroundSection = () => {
  return (
    <BackgroundContainer>
      <h2>Welcome to My Portfolio</h2>
    </BackgroundContainer>
  );
};

export default BackgroundSection;
