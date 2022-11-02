import React from 'react'
import styled from 'styled-components'
import TextArea from './TextArea'

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    box-shadow: 0px 3px 8px var(--shadow);
    border-radius: 7px;
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    /* background-color: #225c8f; */
    width: 1024px;
    height: 100%;
    object-fit: cover;

`

const PromptContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 3px 8px var(--shadow);
    width: 75%;
    border-radius: 10px;
`

const GenerateButton = styled.button`
    width: fit-content;
    align-self: center;
    background-color: var(--primary-panel-color);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0px 3px 8px var(--shadow);
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: var(--muted-outline);
    }

`

const PromptInput = styled(TextArea)`
    flex-grow: 1;
`

function PromptPanel(props) {

    const PanelContainer = styled.div`
        background-color: var(--primary-panel-color);
        padding-top: 10px;
        border-radius: 5px;
        box-shadow: 0px 3px 8px var(--shadow);
        margin: 6.5px;
        flex-grow: ${props => (props.grow || 1)};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 10px;
    `
    return (
        <PanelContainer grow={props.grow}>
            <PromptContainer>
                <PromptInput>Prompt</PromptInput>
                <GenerateButton onClick={() => props.Generate()}>Generate</GenerateButton>
            </PromptContainer>
            <ImageContainer>
                <Img src={props.currentImage} alt="test" />
                {/* test */}
            </ImageContainer>
        </PanelContainer>
    )

}

export default PromptPanel