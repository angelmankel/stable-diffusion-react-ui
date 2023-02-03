import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const StyledImage = styled.img`
    border-radius: 5px;
    width: 80%;
    :hover {
        cursor: pointer;
        outline: 2px solid #ffffff;
        box-shadow: 0 0 5px 2px #ffffff;
    }
`

const Overlay = styled.div`
    /* position: relative; */
    /* top: 0;
    height: 100%; */
    /* flex-shrink: 1; */
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.137);
    border-radius: 5px;
    color: #ffffff;
    opacity: 0;
    margin: 0px;
    padding: 0px;
    :hover {
        cursor: pointer;
        opacity: 1;
    }
`

const Pill = styled.div`
  background-color: #ddd;
  border: none;
  color: black;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 2px 3px;
  cursor: pointer;
  border-radius: 16px;
  font-size: smaller;
`

const StyledButton = styled(Button)`
  background-color: var(--muted-outline);
`

function Image(props) {

  return (
    <Container>
      <Overlay>
        <StyledButton>@</StyledButton>
        <StyledButton>@</StyledButton>
        <StyledButton>@</StyledButton>
        <StyledButton>@</StyledButton>
      </Overlay>
      <StyledImage onDoubleClick={props.onDoubleClick} onClick={props.onClick} params={props.params} info={props.info} src={props.src} />
    </Container>
  )
}

export default Image