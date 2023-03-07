import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import TextArea from './TextArea.jsx';
import Button from './Button.jsx';
import ReactLoading from 'react-loading';
import ModelDropdown from './ModelDropdown';
import SamplerDropdown from './SamplerDropdown';

const Nav = styled.div`
    height: 100px;
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
  box-shadow: 1px 2px 5px var(--shadow);
`
const CancelButton = styled(Button)`
  background-color  : #a54646;
  text-shadow: 1px 1px 5px black;
`

const Container = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    height: 6%;
    background-color: var(--muted-outline);
`

const CompareButton = styled.button`
    background-color  : var(--contrast);
    border-radius: 5px;
    color: #e4e4e4;
    border: none;
    text-shadow: 1px 1px 5px black;
    box-shadow: 1px 2px 5px var(--shadow);
`

const AcceptButton = styled(Button)`
  /* background-color  : var(--contrast); */
  background-color : #3f8f77;
  text-shadow: 1px 1px 5px black;
  box-shadow: 1px 2px 5px var(--shadow);

  &:hover {
    background-color : #53b799;
    }
`

const Space = styled.div`
    flex-grow: 1;
`

const Group = styled.div`
    display: flex;
    gap: 5px;
    /* justify-content: center; */
`

function ImageButtons(props) {

    return (

        <Container>
            <Group style={{ flexGrow: 1, marginLeft : "10px" }}>
                <ModelDropdown 
                    value={props.options.sd_model_checkpoint}
                    setOptions={(val) => props.setOptions({...props.options, sd_model_checkpoint : val})}
                ></ModelDropdown>
                        
                <SamplerDropdown 
                    value={props.settings.sampler_index}
                    setSettings={(val) => props.setSettings({...props.settings, sampler_index : val})}
                ></SamplerDropdown>
            </Group>

            <Group style={{ flexGrow: 2, marginRight : "10px" }}>

                <CompareButton 
                    onMouseDown={() => props.CompareImages()} 
                    onMouseUp={props.CompareImages}
                >Compare
                </CompareButton>
                <AcceptButton>
                    Accept
                </AcceptButton>

            </Group>

            {/* `Generating...${Math.round(props.progress * 100) / 100  * 100}%` */}
            <Group style={{ marginRight : "10px", width: "80px", justifyContent: "center" }}>
                <GenerateButton onClick={props.Generate}>{props.loading ? <ReactLoading type={"cylon"} color={"#ffffff"} height={25} width={25} /> : "Generate"}</GenerateButton>
                {/* <CancelButton onClick={props.Interrupt}>Cancel</CancelButton> */}
            </Group>
        </Container>
    )
}

export default ImageButtons