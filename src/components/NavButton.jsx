import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faCircleInfo, faCog, faImages, faPalette, faToolbox } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

let navBtnStyle = {"outline" : "0px solid gray"}
let imgStyle = {"width" : 40, "marginRight" : 7}

function NavButton(props) {
  console.log(props)
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} style={imgStyle} alt="Logo" />
          App Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={navBtnStyle}>
              
              Create
            </Nav.Link>
            <Nav.Link style={navBtnStyle}>
              
              <FontAwesomeIcon icon="fa-solid fa-gallery-thumbnails" />
              Gallery
            </Nav.Link>
            <Nav.Link style={navBtnStyle}>
              
              Prompts
            </Nav.Link>
            <Nav.Link style={navBtnStyle}>
              
              Post-Processing
            </Nav.Link>
            <Nav.Link style={navBtnStyle}>
              
              About
            </Nav.Link>
            <Nav.Link style={navBtnStyle}>
              
              Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavButton