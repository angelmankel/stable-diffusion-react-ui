import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
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
    <StyledInput type="text" placeholder='Prompt...' onChange={(e) => props.setSettings(e.target.value)} value={props.text}/>
  )
  
}

export default TextArea