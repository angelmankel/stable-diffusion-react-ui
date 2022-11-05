import React from 'react'
import styled from 'styled-components';
import { faBrush, faCircleInfo, faCog, faImages, faPalette, faToolbox } from '@fortawesome/free-solid-svg-icons'
import NavLogo from '../components/NavLogo';
import Icon from '../components/Icon';
import '../css/navbar.css';


const Nav = styled.div`
    height: var(--navbar-height);
    background-color: var(--primary-panel-color);
    box-shadow: 0px 0px 10px var(--shadow);
    flex-grow: 1;

    /* Parent flex for nav buttons */
    display: flex;
    flex-direction: row;
    gap: 50px;
`

function Navbar(props) {
  return (
    <Nav>
      <NavLogo>LUMINARY</NavLogo>
      <div className='buttons-group group-1'>
        <Icon ico={faBrush}/>
        <Icon ico={faPalette}/>
        <Icon ico={faImages}/>
        <Icon ico={faToolbox}/>
        
      </div>
      <div className='buttons-group group-2'>
        <Icon ico={faCircleInfo}/>
        <Icon ico={faCog}/>
      </div>
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
