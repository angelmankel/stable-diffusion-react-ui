import React from 'react'
import styled from 'styled-components';

const Button = styled.div`
  cursor: pointer;
  text-shadow: 4px 3px 9px rgba(0,0,0,1);
  height: 100%;
  user-select: none;
  margin: 5px;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  font-size: 1vw;
  
  &:hover {
    background-color: var(--btn-hover-primary) !important;
    box-shadow: 0px 0px 10px var(--shadow);
  }
`

function NavButton(props) {
  console.log(props)
  return (
    <Button onClick={props.click}>{props.icon}{props.children}</Button>
  )
}

export default NavButton