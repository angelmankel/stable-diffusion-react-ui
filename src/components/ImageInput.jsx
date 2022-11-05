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
`

function ImageInput() {
  return (
    <Image src="" alt="Image" />
  )
}

export default ImageInput
