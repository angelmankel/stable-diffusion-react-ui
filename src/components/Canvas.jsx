import React from 'react'
import styled from 'styled-components'

const CanvasContainer = styled.div`
    background-color: #282828;
    color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Background = styled.div`
    width: ${props => `${props.width}px` || '100%'};
    height: ${props => `${props.height}px` || '100%'};
    background-color: #2e2e2e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.025);
`

const Image = styled.img`
    object-fit: contain;
    flex-grow: 1;
    background-color: ${props => props.bgcolor};
`

function Canvas({ layers, setLayer, canvasSize, setCanvasSize }) {
    return (
    <CanvasContainer>
        <Background height={canvasSize.height} width={canvasSize.width} bgcolor={'red'}>
            <Image src={layers[0].image} alt="" />
        </Background>
    </CanvasContainer>
  )
}

export default Canvas
