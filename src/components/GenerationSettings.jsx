import React, { useState } from 'react'
import Slider from 'rc-slider';
import SliderTooltip from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import CustomSlider from './CustomSlider';
import Dropdown from './Dropdown';
import InputWithIncrement from './InputWithIncrement';
import ImageInput from './ImageInput';
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
                <Dropdown defaultSettings={props.defaultSettings}></Dropdown>
                <CustomSlider step={5} marks={false} min={1} max={15} defaultValue={props.defaultSettings.batch_size}>Number of Images</CustomSlider>
                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={props.defaultSettings.width}>Width</CustomSlider>
                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={props.defaultSettings.height}>Height</CustomSlider>
                <CustomSlider step={1} marks={false} min={1} max={50} defaultValue={props.defaultSettings.cfg_scale}>CFG Scale</CustomSlider>
                <CustomSlider step={1} marks={false} min={1} max={150} defaultValue={props.defaultSettings.steps}>Steps</CustomSlider>            
                <InputWithIncrement defaultSettings={props.defaultSettings}>Seed</InputWithIncrement>
                <OptionalSettings />
            </Container>
        </OuterContainer>

    )
}

export default GenerationSettings