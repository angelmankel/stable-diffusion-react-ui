import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: var(--secondary-panel-color);
    border: none;
    border-radius: 5px;
    color: #ffffffbc;
    padding: 10px;
    resize: none;
    align-self: center;
    cursor: pointer;
    &:hover {
        background-color: var(--btn-hover-primary);
    }
`

function Button(props) {
  return (
    <StyledButton className={props.className} onClick={props.onClick}>{props.children}</StyledButton>
  )
}

export default Button