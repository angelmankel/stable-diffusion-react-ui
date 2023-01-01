import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 256px;
    height: 256px;
    border-radius: 10px;
    background-color: var(--muted-outline);
    align-self: center;
    margin-top: 10px;
    flex-shrink: 0;

    // Might need to change this to cover
    object-fit: contain;
`

function ImageInput(props) {
  return (
    <Image src={props.inputImage} alt="Image" />
  )
}

export default ImageInput
