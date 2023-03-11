import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const PopoverContent = styled(Popover)`
  background-color: #ffffff67;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.265);
  border-radius: 5px;
  text-align: center;                                           
`;

const PopoverHeader = styled.div`
  background-color: #000000bd;
  border-radius: 5px 5px 0 0;
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
`;

const PopoverBody = styled.div`
  padding: 10px;
  color: #ffffff;
  text-shadow: 1px 1px 5px rgb(0, 0, 0.5);
`;
  
const Modifier = styled.div`
    text-align: center;
    border-radius: 5px;
    font-size: 0.8rem;
    color: white;
    padding: 2px 5px;
    background-color: ${(props) => {
        const strength = props.strength || 0.1;
        const blue = Math.round((1 - (strength - 0.1) / 1.4) * 140);
        const green = Math.round(((strength - 0.1) / 1.1) * 140);
        const red = 0;
        return `rgb(0, ${green}, ${blue})`;
    }};
    color: ${(props) => {
        const strength = props.strength || 0.1;
        const brightness = (1 - (strength - 0.1) / 1.9) * 100;
        return brightness > 50 ? 'white' : 'black';
    }};
    user-select: none;
    cursor: pointer;
    transition: 0.3s ease-out;

    &:hover {
        filter: brightness(1.3);
    }
`;

const onWheel = (e, props) => {

    if (e.altKey && e.buttons === 1) {
        props.setModifiers(props.modifiers.map((modifier) => {
            if (modifier.value === props.modifier.value) {
                return {
                    ...modifier,
                    strength: Math.min(Math.max(Number((modifier.strength - (e.deltaY / 10000)).toFixed(3)), 0.1), 2)
                };
            }
            return modifier;
        }));
    } else if (e.buttons === 1) {
        props.setModifiers(props.modifiers.map((modifier) => {
            if (modifier.value === props.modifier.value) {
                return {
                    ...modifier,
                    strength: Math.min(Math.max(Number((modifier.strength - (e.deltaY / 1000)).toFixed(1)), 0.1), 2)
                };
            }
            return modifier;
        }));
    }
}

function ModifierPill(props) {   

    const popover = (
        <PopoverContent>
            <PopoverHeader>{props.modifier.value}</PopoverHeader>
            <PopoverBody>
                <div>Strength: {props.modifier.strength}</div>
            </PopoverBody>
        </PopoverContent>
    )

    return (
        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
            <Modifier 
                strength={props.modifier.strength} 
                value={props.modifier.value}
                onDoubleClick={props.onDoubleClick}
                onWheel={(e) => onWheel(e, props)}
                showStrength={props.showStrength}
            >
                {props.showStrength ? '(' : null}
                {props.children}
                {props.showStrength ? `:${props.modifier.strength}` : null}
                {props.showStrength ? ')' : null}
            </Modifier>
        </OverlayTrigger>
    );
  }

export default ModifierPill