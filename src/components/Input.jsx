import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 3px;
    border-radius: 5px;
    font-size: smaller;
    flex-grow: 1;
`

const StyledInput = styled.input`
    background-color: #92929211;
    border: none;
    border-radius: 5px;
    color: #ffffffbc;
`

const StyledLabel = styled.label`
    margin-bottom: 5px;
`

function Input(props) {
  return (
    <Container>
        <StyledLabel>{props.children}</StyledLabel>
        <StyledInput type="text" />
    </Container>
  )
}

export default Input