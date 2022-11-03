import React from 'react'
import styled from 'styled-components';

function Container(props) {

    const MainContainer = styled.div`        
        display: flex;
        height: 100%; 
        /* background: linear-gradient(var(--primary-panel-color), var(--secondary-panel-color)); */
    `
    
    return (
        <MainContainer>{props.children}</MainContainer>
    )

}

export default Container