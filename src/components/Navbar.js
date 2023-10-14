// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: white;
  display: flex;
  align-items: center; /* Vertically center items */
  justify-content: space-between;
  padding: 1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px; /* Adjust the space between links */
`;

const NavLink = styled.li`
  margin: 0;
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Vinayak's Portfolio</h1>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
