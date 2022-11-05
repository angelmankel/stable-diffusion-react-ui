import React, { useState } from 'react'
import Slider from 'rc-slider';
import SliderTooltip from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import CustomSlider from './CustomSlider';
import Dropdown from './Dropdown';
import Switch from './CustomSwitch';
import InputWithIncrement from './InputWithIncrement';
import ImageInput from './ImageInput';

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

const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
`



function GenerationSettings() {
    return (
        <OuterContainer>
            <Container>
                <SwitchContainer>
                    <Switch>Tiling</Switch>
                    <Switch>Restore Faces</Switch>
                </SwitchContainer>
                <Dropdown></Dropdown>
                <CustomSlider step={5} marks={false} min={1} max={15} defaultValue={1}>Number of Images</CustomSlider>
                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={512}>Width</CustomSlider>
                <CustomSlider step={128} marks={false} min={128} max={2048} defaultValue={512}>Height</CustomSlider>
                <CustomSlider step={0.01} marks={false} min={0.1} max={1} defaultValue={0.75}>CFG Scale</CustomSlider>
                <CustomSlider step={1} marks={false} min={1} max={150} defaultValue={50}>Steps</CustomSlider>            
                <InputWithIncrement>Seed</InputWithIncrement>
                <InputWithIncrement>Variation Seed</InputWithIncrement>
                <CustomSlider step={0.01} marks={false} min={0.1} max={1} defaultValue={0.75}>Variation Strength</CustomSlider>
                <ImageInput />
                <CustomSlider step={0.01} marks={false} min={0.1} max={1} defaultValue={0.75}>Denoising Strength</CustomSlider>
            </Container>
        </OuterContainer>

    )
}

export default GenerationSettings