import React from 'react'
import styled from 'styled-components';

function MainContainer(props) {

    const Container = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: linear-gradient(var(--primary-panel-color), var(--secondary-panel-color));
    `
    
    return (
        <Container>{props.children}</Container>
    )

}

export default MainContainer