import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    color: white;
    padding: 3px;
    border-radius: 5px;
    font-size: smaller;
    flex-grow: 1;
    width: 100%; */
`

const StyledInput = styled.textarea`
    background-color: #92929211;
    border: none;
    border-radius: 5px;
    color: #ffffffbc;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
`

function TextArea(props) {
  return (
    <StyledInput type="text" placeholder='Prompt...' />
    // <Container>
    // </Container>
  )
}

export default TextArea