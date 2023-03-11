import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo.png';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
    height: var(--navbar-height);
    background-color: var(--primary-panel-color);
    box-shadow: 0px 0px 10px var(--shadow);
    flex-grow: 1;
    color: #ffffff;
    
    /* Parent flex for nav buttons */
    display: flex;
    flex-direction: row;
`

const Title = styled.div`
  font-size: .8rem;
  font-weight: 600;
  align-self: center;
`

const Img = styled.img`
    height: 18px;
    object-fit: contain;
`

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 0px 6px #000000;   
    gap: 5px; 
    background-color: #0000001d;
    padding-left: 10px;
    padding-right: 10px;
`

const NavButton = styled.button`
    background-color: #ffffff11;
    color: #ffffff;
    border: none;
    padding: 5px;
    font-size: .8rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-panel-color-hover);
    }
    
    display: flex;
    justify-content: center;
    align-items: center;
`

const Group = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1px;
    flex-grow: ${props => props.grow ? props.grow : '0'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`

function Navbar(props) {
  
  return (
    <Nav>
      <Logo>
        <Img src={logo} /><Title>LUMINARY</Title>
      </Logo>
      <Group grow={1} marginLeft={5}>
        <NavButton>File</NavButton>
        <NavButton>Edit</NavButton>
      </Group>
      <Group marginRight={5}>
        <NavButton><FontAwesomeIcon icon={faWindowMinimize} /></NavButton>
        <NavButton><FontAwesomeIcon icon={faWindowMaximize} /></NavButton>
        <NavButton><FontAwesomeIcon icon={faWindowClose} /></NavButton>
      </Group>
    </Nav>
  )
}

export default Navbar







// {/* <NavButton className={"nav-btn"} click={() => {console.log("test")}} icon={}>Create</NavButton> */}

// {/* <NavButton className={"nav-btn"} click={() => {console.log("test")}} icon={}>Prompts</NavButton> */}

// {/* <NavButton className={"nav-btn"} click={() => {console.log("test")}} icon={}>Gallery</NavButton> */}

// {/* <NavButton className={"nav-btn"} click={() => {console.log("test")}} icon={}>Post-Processing</NavButton> */}

// {/* <NavButton className={"nav-btn"} click={() => {console.log("test")}} icon={}>About</NavButton> */}

// {/* <NavButton className={"nav-btn"} click={() => {console.log("test")}} icon={}>Settings</NavButton> */}
