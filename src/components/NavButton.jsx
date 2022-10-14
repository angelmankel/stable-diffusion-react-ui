import React from 'react'
import styled from 'styled-components';

const Button = styled.div`
  cursor: pointer;
  font-size: 1pc;
  text-shadow: 4px 3px 9px rgba(0,0,0,1);
  padding-left: 30px;
  padding-right: 30px;
  height: 100%;
  border: none;
  border-radius: 0px !important;
  background-color: var(--transparent);
  
  &:hover {
    background-color: var(--btn-hover-primary) !important;
    box-shadow: 0px 0px 10px var(--shadow);
  }
`

function NavButton(props) {
  console.log(props)
  return (
    <Button>{props.children}</Button>
  )
}

export default NavButton