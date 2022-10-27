import React from 'react'
import styled from 'styled-components'



function RecallPanel(props) {

    const PanelContainer = styled.div`
        background-color: var(--primary-panel-color);
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0px 3px 8px var(--shadow);
        margin: 6.5px;
        flex-grow: ${props => (props.grow || 1)};
        /* overflow-y: scroll; */
        
    `
    return (
        <PanelContainer grow={props.grow}>{props.children}</PanelContainer>
    )
}

export default RecallPanel