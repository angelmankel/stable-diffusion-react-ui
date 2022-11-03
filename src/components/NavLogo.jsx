import React from 'react'
import logo from '../img/logo.png';
import styled from 'styled-components';

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 0px 6px #000000;

    margin-left: 30px;
`

const Img = styled.img`
    height: 45px;
    filter: drop-shadow(0px 0px 10px #c7c7c761);
`

const Text = styled.h6`
    font-size: 15px;
    margin: 0px;
    color: white;
`

function NavLogo(props) {
  return (
    <Logo>
        <Img src={logo} />
        <Text>{props.children}</Text>
    </Logo>
  )
}

export default NavLogo