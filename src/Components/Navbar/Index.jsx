import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import ConnectBtn from '../ConnectBtn';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar variant="dark" expand="lg" expanded={expanded}>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/home" className="flex-grow-1">
          <img src="./Images/logo.png" alt="MOVIEMINT Logo" width="100" height="70" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1">
          <Nav className="mx-au">
            <Nav.Link as={Link} to="/" className='text-light navs'>Home</Nav.Link>
            <Nav.Link as={Link} to="/overview" className='text-light navs'>Overview</Nav.Link>
            <Nav.Link as={Link} to="/about" className='text-light navs'>About Us</Nav.Link>
            <Nav.Link as={Link} to="/faq" className='text-light navs'>FAQ</Nav.Link>
            <Nav.Link as={Link} to="/marketplace" className='text-light navs'>Marketplace</Nav.Link>
          </Nav>
          <div className="flex-grow-1 d-flex justify-content-end">
            <ConnectBtn/>
          {/* <button className='btn custom-btn'>
            <FontAwesomeIcon icon={faPlug} /> 
          </button> */}
          {/* <button className='btn custom-btn'>
          Sign Up
          </button> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
