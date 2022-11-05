import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faCircleInfo, faCog, faImages, faPalette, faToolbox } from '@fortawesome/free-solid-svg-icons'
import NavButton from './NavButton.jsx';
import NavLogo from './NavLogo';
import Icon from './Icon';
import '../css/navbar.css';
import logo from '../img/logo.png';
import TextArea from './TextArea.jsx';
import Button from './Button.jsx';

const Nav = styled.div`
    height: var(--secondary-navbar-height);
    background-color: var(--primary-panel-color);
    box-shadow: 0px 0px 10px var(--shadow);
    flex-grow: 1;

    /* Parent flex for nav content */
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 10px;
`

function SecondaryNavbar(props) {
  return (
    <Nav>
      <div className='panel-1'>
        <Button>Undo</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
      <div className='panel-2'>
        <TextArea />
        <TextArea />
      </div>
      <div className='panel-3'>
        <Button>Generate</Button>
        <Button>Cancel</Button>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
    </Nav>
  )
}

export default SecondaryNavbar