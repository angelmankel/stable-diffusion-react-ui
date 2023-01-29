import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const InnerContainer = styled.div`
    margin: 10px;
    flex-grow: 1;
    overflow-y: auto;

    display: flex;
    flex-direction: row;
    gap: 5px;

    justify-content: center;
    flex-wrap: wrap;
`

const StyledImage = styled.img`
    flex-grow: 1;
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
`
const ImgOverlay = styled.div`
    position: absolute;
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    gap: 5px;
    filter: opacity(0);
    :hover {
        filter: opacity(1);
    }

    transition: filter 0.50s ease-out;
`

function Image(props) {
    return (
        <StyledImage src={props.src} alt="" />
    )
}

function ImageCanvas(props) {
 
    function Images () {
        
        if (props.currentImage !== null) {
            const images = props.currentImage.map((image, index) =>
                <Image key={index} src={image} alt="" />
            )

            return images
        }

        return null
    }
    
    return (
        <Container>
            <InnerContainer>           
                <ImgOverlay>
                    <Button>Download</Button>
                    <Button>Edit</Button>
                    <Button>Upscale</Button>
                    <Button>Info</Button>
                    <Button>Delete</Button>
                </ImgOverlay> 
                <Images />
            </InnerContainer>
        </Container>
    )
}

export default ImageCanvas