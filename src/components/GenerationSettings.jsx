import React from 'react'
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import CustomSlider from './CustomSlider';
import Dropdown from './Dropdown';
import InputWithIncrement from './InputWithIncrement';
import OptionalSettings from './OptionalSettings';

const OuterContainer = styled.div`
    height: 100%;
    background-color: var(--gradient-light);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    gap: 15px;
    box-sizing: border-box;
    overflow-y: auto;
    margin-right: 7px;
`

function GenerationSettings(props) {

    return (
        <OuterContainer>
            <Container>
                <Dropdown settings={props.settings}></Dropdown>
                <CustomSlider step={1} marks={false} min={1} max={15} defaultValue={props.settings.batch_size}
                setSettings={(val) => props.setSettings({...props.settings, batch_size : val})}
                value={props.settings.batch_size}>Number of Images</CustomSlider>

                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={props.settings.width}
                setSettings={(val) => props.setSettings({...props.settings, width : val})}
                value={props.settings.width}>Width</CustomSlider>

                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={props.settings.height}
                setSettings={(val) => props.setSettings({...props.settings, height : val})}
                value={props.settings.height}>Height</CustomSlider>

                <CustomSlider step={1} marks={false} min={1} max={50} defaultValue={props.settings.cfg_scale}
                setSettings={(val) => props.setSettings({...props.settings, cfg_scale : val})}
                value={props.settings.cfg_scale}>CFG Scale</CustomSlider>

                <CustomSlider step={1} marks={false} min={1} max={150} defaultValue={props.settings.steps}
                setSettings={(val) => props.setSettings({...props.settings, steps : val})}
                value={props.settings.steps}>Steps</CustomSlider>             

                <InputWithIncrement
                setSettings={(val) => props.setSettings({...props.settings, seed : val})}
                value={props.settings.seed}
                >Seed</InputWithIncrement>

                <OptionalSettings 
                inputImage={props.inputImage}
                setSettings={(val) => props.setSettings({...props.settings, denoising_strength : val})}
                value={props.settings.denoising_strength}
                />
            </Container>
        </OuterContainer>

    )
}

export default GenerationSettings