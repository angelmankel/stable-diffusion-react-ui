import React, {useState} from 'react'
import styled from 'styled-components'
import CustomSwitch from './CustomSwitch'
import ImageInput from './ImageInput'
import CustomSlider from './CustomSlider'
import InputWithIncrement from './InputWithIncrement'
import UpscalerDropdown from './UpscalerDropdown'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;    
    padding: 10px;

`

function OptionalSettings(props) {
    const [tiling, setTiling] = useState(false);
    const [restoreFaces, setRestoreFaces] = useState(false);
    const [variationSeed, setVariationSeed] = useState(false);
    const [imageInput, setImageInput] = useState(false);

    function HandleChange(type, e) {
        switch (type) {
            case 'hires':
                props.setSettings({...props.settings, enable_hr : e})
                break;
            case 'tiling':
                // setTiling();
                props.setSettings({...props.settings, tiling : e})
                break;
            case 'restoreFaces':
                // setRestoreFaces();
                props.setSettings({...props.settings, restore_faces : e})
                break;
            // these need more work because they need booleans, but the settings only have numbers, need to make another state system for these probably
            case 'variationSeed':
                // setVariationSeed();
                // props.setSettings({...props.settings, subs : e})
                break;
            case 'imageInput':
                // setImageInput();
                // props.setSettings({...props.settings, denoising_strength : e})
                break;
            default:
                break;
        }
    }

    return (
        <>
        <Container>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <CustomSwitch checked={props.settings.tiling} onChange={(e) => HandleChange('tiling', e)}>Tiling</CustomSwitch>
                <CustomSwitch checked={props.settings.restore_faces} onChange={(e) => HandleChange('restoreFaces', e)}>Restore Faces</CustomSwitch>
                <CustomSwitch checked={props.settings.enable_hr} onChange={(e) => HandleChange('hires', e)}>Hi-Res Fix</CustomSwitch>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                <CustomSwitch disabled={true} checked={variationSeed} onChange={(e) => HandleChange('variationSeed', e)}>Variation Seed</CustomSwitch>
                {/* Need to add something to set settings to img2img when this is turned on, for now always true */}
                <CustomSwitch disabled={true} checked={imageInput} onChange={(e) => HandleChange('imageInput', e)}>Image Input</CustomSwitch>
                <UpscalerDropdown 
                    value={props.settings.hr_upscaler}
                    setSettings={(val) => props.setSettings({...props.settings, hr_upscaler : val})}
                ></UpscalerDropdown>
            </div>
        </Container>
        <ContentContainer>
            { variationSeed ? <InputWithIncrement>Variation Seed</InputWithIncrement> : null }
            { imageInput ? 
            <>
                <ImageInput inputImage={props.inputImage} />
                <CustomSlider 
                    step={0.01} 
                    marks={false} 
                    min={0.1} 
                    max={1} 
                    defaultValue={0.75}
                    setSettings={(val) => props.setSettings({...props.settings, denoising_strength : val})}
                    value={props.settings.denoising_strength}
                >Denoising Strength</CustomSlider>
            </> : null }
        </ContentContainer>
        </>
    )
}

export default OptionalSettings