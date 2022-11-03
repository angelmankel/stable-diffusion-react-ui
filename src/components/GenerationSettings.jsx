import React, { useState } from 'react'
import Slider from 'rc-slider';
import SliderTooltip from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import CustomSlider from './CustomSlider';

const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    padding: 20px; */
    /* background-color: #5c6363; */
`

function GenerationSettings() {

    

    return (
        <Container>
            <CustomSlider step={5} marks={false} min={1} max={15} defaultValue={1}>Number of Images</CustomSlider>
            <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={512}>Width</CustomSlider>
            <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={512}>Height</CustomSlider>
            <CustomSlider step={5} marks={false} min={1} max={150} defaultValue={100}>Variation Strength</CustomSlider>
            <CustomSlider step={0.01} marks={false} min={0.1} max={1} defaultValue={0.75}>CFG Scale</CustomSlider>
            <CustomSlider step={1} marks={false} min={1} max={150} defaultValue={50}>Steps</CustomSlider>
        </Container>

    )
}

export default GenerationSettings