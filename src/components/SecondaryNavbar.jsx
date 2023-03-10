import React from 'react'
import styled from 'styled-components';
import '../css/navbar.css';
import TextArea from './TextArea.jsx';
import Button from './Button.jsx';
import ReactLoading from 'react-loading';
import ModelDropdown from './ModelDropdown';
import SamplerDropdown from './SamplerDropdown';

const Nav = styled.div`
    height: var(--secondary-navbar-height);
    background-color: var(--primary-panel-color);
    box-shadow: 0px 0px 10px var(--shadow);
    flex-grow: 1;
    flex-direction: column;

    /* Parent flex for nav content */
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 5px;
    z-index: 0;
    padding: 15px;
`

const GenerateButton = styled(Button)`
  background-color  : var(--contrast);
  text-shadow: 1px 1px 5px black;
`
const CancelButton = styled(Button)`
  background-color  : #a54646;
  text-shadow: 1px 1px 5px black;
`

function SecondaryNavbar(props) {

  let Spinner = props.loading ? <ReactLoading type={"cylon"} color={"#ffffff"} height={25} width={25} /> : null

  return (
    <Nav>
      <div className='prompt-panel'>
        <TextArea text={props.settings.prompt} setSettings={(val) => props.setSettings({...props.settings, prompt : val})}/>
        <TextArea text={props.settings.negative_prompt} setSettings={(val) => props.setSettings({...props.settings, negative_prompt : val})}/>
      </div>
    </Nav>
  )
}

export default SecondaryNavbar