import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faCircleInfo, faCog, faImages, faPalette, faToolbox } from '@fortawesome/free-solid-svg-icons'
import NavButton from '../components/NavButton.jsx';
import NavLogo from '../components/NavLogo';
import Icon from '../components/Icon';

const Nav = styled.div`
    height: 5vw;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    background-color: var(--primary-panel-color);
    box-shadow: 0px 0px 10px var(--shadow);
`

function Navbar(props) {
  return (
    <Nav>
        <NavLogo>LUMINARY</NavLogo>
        <NavButton click={() => {console.log("test")}} icon={<Icon ico={faBrush}/>}>Create</NavButton>
        <NavButton click={() => {console.log("test")}} icon={<Icon ico={faPalette}/>}>Prompts</NavButton>
        <NavButton click={() => {console.log("test")}} icon={<Icon ico={faImages}/>}>Gallery</NavButton>
        <NavButton click={() => {console.log("test")}} icon={<Icon ico={faToolbox}/>}>Post-Processing</NavButton>
        <NavButton click={() => {console.log("test")}} icon={<Icon ico={faCircleInfo}/>}>About</NavButton>
        <NavButton click={() => {console.log("test")}} icon={<Icon ico={faCog}/>}>Settings</NavButton> 
    </Nav>
  )
}

export default Navbar