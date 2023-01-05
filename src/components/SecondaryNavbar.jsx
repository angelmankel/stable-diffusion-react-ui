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
    padding-top: 5px;
    padding-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
`

function SecondaryNavbar(props) {

  let Spinner = props.loading ? <ReactLoading type={"cylon"} color={"#ffffff"} height={25} width={25} /> : null

  return (
    <Nav>
      {/* <div className='panel-1'>
        <Button>Undo</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div> */}
      <div className='buttons-panel'>
        {/* <Button>Undo</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button> */}
        {/* <Button onClick={props.GetImageLibrary}>Load History</Button> */}
        {/* <Button>Button 1</Button>
        <Button>Cancel</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button> */}
        <ModelDropdown 
            value={props.options.sd_model_checkpoint}
            setOptions={(val) => props.setOptions({...props.options, sd_model_checkpoint : val})}
        ></ModelDropdown>
                
        <SamplerDropdown 
            value={props.settings.sampler_index}
            setSettings={(val) => props.setSettings({...props.settings, sampler_index : val})}
        ></SamplerDropdown>

        <Button onClick={props.Generate}>{Spinner ? Spinner : "Generate"}</Button>
      </div>
      <div className='prompt-panel'>
        <TextArea text={props.settings.prompt} setSettings={(val) => props.setSettings({...props.settings, prompt : val})}/>
        <TextArea text={props.settings.negative_prompt} setSettings={(val) => props.setSettings({...props.settings, negative_prompt : val})}/>
      </div>
    </Nav>
  )
}

export default SecondaryNavbar