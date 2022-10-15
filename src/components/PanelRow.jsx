import React from 'react'
import styled from 'styled-components'

function PanelRow(props) {
    const Area = styled.div`
        display: flex;
        flex-direction: row;
        flex-grow: ${props => (props.grow || 1)};
    `

    return (
        <Area grow={props.grow}>{props.children}</Area>
    )
}

export default PanelRow