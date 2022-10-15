import React from 'react'
import logo from '../img/logo.png';
import styled from 'styled-components';

const Logo = styled.div`
    height: 100%;
    margin-left: 50px;
    margin-right: 50px;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    text-shadow: 0px 0px 6px #000000;
`

const Img = styled.img`
    height: 2vw;
    margin-bottom: 5px;
    margin-top: 7px;
    filter: drop-shadow(0px 0px 10px #c7c7c761);
`

const Text = styled.h6`
    font-size: 1vw;
    margin: 0px;
    color: white;
`

function NavLogo(props) {
  return (
    <Logo>
        <Img role="img" src={logo} aria-label="logo" />
        <Text>{props.children}</Text>
    </Logo>
  )
}

export default NavLogo