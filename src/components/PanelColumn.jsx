import React from 'react'
import styled from 'styled-components'

function PanelColumn(props) {
    const Area = styled.div`
        background-color: ${props => (props.inputColor || "palevioletred")};
        display: flex;
        flex-direction: column;
        flex-grow: ${props => (props.grow || 1)};
    `

    return (
        <Area grow={props.grow} inputColor={props.inputColor}>{props.children}</Area>
    )
}

export default PanelColumn