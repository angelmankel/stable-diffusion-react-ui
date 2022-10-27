import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    border-radius: 5px;
`

function Image(props) {
  return (
    <StyledImage src={props.src} />
  )
}

export default Image