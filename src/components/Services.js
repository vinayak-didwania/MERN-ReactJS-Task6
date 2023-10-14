import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  background: #333;
  color: white;
  padding: 2rem;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h2>My Services</h2>
      <ul>
        <li>Data Science Engineer</li>
        <li>Software Developer</li>
        <li>Database Manager</li>
      </ul>
    </ServicesContainer>
  );
};

export default Services;