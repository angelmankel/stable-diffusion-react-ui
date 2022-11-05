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

function GenerationSettings() {
    return (
        <OuterContainer>
            <Container>
                <Dropdown></Dropdown>
                <CustomSlider step={5} marks={false} min={1} max={15} defaultValue={1}>Number of Images</CustomSlider>
                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={512}>Width</CustomSlider>
                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={512}>Height</CustomSlider>
                <CustomSlider step={0.01} marks={false} min={0.1} max={1} defaultValue={0.75}>CFG Scale</CustomSlider>
                <CustomSlider step={1} marks={false} min={1} max={150} defaultValue={50}>Steps</CustomSlider>            
                <InputWithIncrement>Seed</InputWithIncrement>
                <OptionalSettings />
            </Container>
        </OuterContainer>

    )
}

export default GenerationSettings