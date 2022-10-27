import React from 'react'
import styled from 'styled-components'
import TextArea from './TextArea'

const Img = styled.img`
  margin-top: 25px;
  margin-bottom: 25px;
  /* height: 100%; */
  flex-grow: 1;
  image-resolution: 1024px;
  object-fit: fill;
  box-shadow: 0px 3px 8px var(--shadow);
  border-radius: 7px;
`

const PromptContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 3px 8px var(--shadow);
    width: 75%;
    border-radius: 10px;
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
    `
    return (
        <PanelContainer grow={props.grow}>
            <PromptContainer>
                <TextArea>Prompt</TextArea>
            </PromptContainer>
            <Img src="https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg" alt="test" />
        </PanelContainer>
    )

}

export default PromptPanel