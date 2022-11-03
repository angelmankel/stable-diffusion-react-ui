import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: var(--secondary-panel-color);
    border: none;
    border-radius: 5px;
    color: #ffffffbc;
    padding: 10px;
    resize: none;

`

function Button(props) {
  return (
    <StyledButton>{props.children}</StyledButton>
  )
}

export default Button