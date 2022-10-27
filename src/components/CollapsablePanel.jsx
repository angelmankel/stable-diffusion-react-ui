import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

function CollapsablePanel(props) {

    // TODO get defaults for collapsed or expanded and set as the initial state
    const [collapsed, setCollapsed] = useState(true)

    const PanelContainer = styled.div`
        background-color: var(--primary-panel-color);
        padding: 0px;
        padding-left: 0;
        border-radius: 5px;
        box-shadow: 0px 3px 8px var(--shadow);
        margin: 6.5px;
        margin-left: ${props => (props.side === 'left' ? '6.5px' : '0px')};
        margin-right: ${props => (props.side === 'right' ? '6.5px' : '0px')};
        flex-grow: ${props => (props.grow || 1)};
        display: flex;
        flex-direction: row;
    `
    const Button = styled.button`
        background-color: var(--gradient-dark);
        outline: none;
        border: none;
        margin: 0;
        padding: 1.5px;
        border-radius: 5px;
        
        
        border-top-right-radius: ${props => (props.side === 'right' ? '5px' : '0px')};
        border-bottom-right-radius: ${props => (props.side === 'right' ? '5px' : '0px')};
        border-top-left-radius: ${props => (props.side === 'left' ? '5px' : '0px')};
        border-bottom-left-radius: ${props => (props.side === 'left' ? '5px' : '0px')};
        
        height: 50%;
        margin: auto;
        cursor: pointer;
        z-index: 0;
        transition: ease-in-out 0.15s;

        &:hover {
            background-color: var(--gradient-light);
            padding: 4px;
        }
    `

    const Panel = () => {

        if (props.side === "left") {
            if (collapsed) {
                return (
                    <>
                    {<Button side={props.side} onClick={() => setCollapsed(!collapsed)}>{collapsed ? '>' : '<'}</Button>}
                    <PanelContainer grow={props.grow}>{props.children}</PanelContainer>
                    </>
                )
            }
    
            return (<Button side={props.side} onClick={() => setCollapsed(!collapsed)}>{collapsed ? '>' : '<'}</Button>)
        } else {
            if (collapsed) {
                return (
                    <>
                    <PanelContainer grow={props.grow}>{props.children}</PanelContainer>
                    {<Button side={props.side} onClick={() => setCollapsed(!collapsed)}>{collapsed ? '<' : '>'}</Button>}
                    </>
                )
            }
    
            return (<Button side={props.side} onClick={() => setCollapsed(!collapsed)}>{collapsed ? '<' : '>'}</Button>)
        }
    }

    return (
        <Panel />
    )
}

export default CollapsablePanel