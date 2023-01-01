import React, {useState} from 'react'
import styled from 'styled-components'
import CustomSwitch from './CustomSwitch'
import ImageInput from './ImageInput'
import CustomSlider from './CustomSlider'
import InputWithIncrement from './InputWithIncrement'

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
    const [imageInput, setImageInput] = useState(true);

    function HandleChange(type, e) {
        switch (type) {
            case 'tiling':
                setTiling(e);
                break;
            case 'restoreFaces':
                setRestoreFaces(e);
                break;
            case 'variationSeed':
                setVariationSeed(e);
                break;
            case 'imageInput':
                setImageInput(e);
                break;
            default:
                break;
        }
    }

    return (
        <>
        <Container>
            <div>
                <CustomSwitch checked={tiling} onChange={(e) => HandleChange('tiling', e)}>Tiling</CustomSwitch>
                <CustomSwitch checked={restoreFaces} onChange={(e) => HandleChange('restoreFaces', e)}>Restore Faces</CustomSwitch>
            </div>
            <div>
                <CustomSwitch checked={variationSeed} onChange={(e) => HandleChange('variationSeed', e)}>Variation Seed</CustomSwitch>
                <CustomSwitch checked={imageInput} onChange={(e) => HandleChange('imageInput', e)}>Image Input</CustomSwitch>
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
                    setSettings={(val) => props.setSettings({...props.settings, batch_size : val})}
                    value={props.value}
                >Denoising Strength</CustomSlider>
            </> : null }
        </ContentContainer>
        </>
    )
}

export default OptionalSettings