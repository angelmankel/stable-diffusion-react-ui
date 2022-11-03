import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.textarea`
    background-color: #92929211;
    border: none;
    border-radius: 5px;
    color: #ffffffbc;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    flex-grow: 1;
    resize: none;
`

function TextArea(props) {
  return (
    <StyledInput type="text" placeholder='Prompt...' />
  )
}

export default TextArea