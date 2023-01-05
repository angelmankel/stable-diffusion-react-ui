import React from 'react'
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import CustomSlider from './CustomSlider';
import SamplerDropdown from './SamplerDropdown';
import InputWithIncrement from './InputWithIncrement';
import OptionalSettings from './OptionalSettings';
import ModelDropdown from './ModelDropdown';

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
const Status = styled.div`
    display: flex;
    flex-direction: row;
`

const Loading = styled.div`
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #747286;
    gap: 20px;
    border-radius: 6px;
    flex-grow: 1;
    height: 50px;
`



function GenerationSettings(props) {

    return (
        <OuterContainer>
            <Container>
                {/* <ModelDropdown 
                    value={props.options.sd_model_checkpoint}
                    setOptions={(val) => props.setOptions({...props.options, sd_model_checkpoint : val})}
                ></ModelDropdown>
                
                <SamplerDropdown 
                    value={props.settings.sampler_index}
                    setSettings={(val) => props.setSettings({...props.settings, sampler_index : val})}
                ></SamplerDropdown> */}

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
                setSettings={props.setSettings}
                settings={props.settings}
                />
            </Container>
        </OuterContainer>

    )
}

export default GenerationSettings