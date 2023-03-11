import React from 'react'
import { useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import Modal from './Modal';
import ModifierPill from './ModifierPill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faCheck, faRedo, faTimes, faUndo } from '@fortawesome/free-solid-svg-icons';
import PromptComponent from './PromptComponent';

const OuterContainer = styled.div`
    height: 100%;
    background-color: var(--gradient-light);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    gap: 15px;
    box-sizing: border-box;
    overflow-y: auto;
    margin-right: 7px;
`

const Loading = styled.div`
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #747286;
    gap: 20px;
    border-radius: 6px;
    flex-grow: 1;
    height: 50px;
`

const Prompt = styled.div`
    display: flex;
    flex-direction: column;
    
    border-radius: 6px;
    background-color: #00000018;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const NegativePrompt = styled.div`
    display: flex;
    flex-direction: column;
    
    border-radius: 6px;
    background-color: #00000018;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const CustomTextArea = styled.textarea`
    width: 100%;

    border: none;
    background-color: #0000001e;
    color: white;
    font-size: 1.2rem;
    resize: none;
    overflow: hidden;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.1rem;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    overflow: auto;
    border-radius: 6px;
`

const CustomInput = styled.input`
    width: 100%;
    border: none;
    background-color: #00000014;
    color: white;
    font-size: 1rem;
    resize: none;
    overflow: hidden;
    outline: none;
    padding: 7px;
    box-sizing: border-box;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    overflow: auto;
    border-radius: 6px 6px 0px 0px;
`

const Label = styled.div`
    font-size: 1rem;
    color: #ffffffc5;
    font-weight: 700;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    flex-grow: 1;
`

const Modifers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 6px;
    background-color: #00000018;
    padding: 0px 10px 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`

const Button = styled.button`
    background-color: #0000001e;
    width: ${(props) => props.width}px;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 4px;
    cursor: pointer;
    outline: none;
    transition: 0.35s ease-out;
    border: 1px solid transparent;
    &:hover {
        background-color: #8787871b;
        border: 1px solid #ffffff3c;
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    gap: 2.5px;
`

const ModifiersContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`

const PromptGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
    border-radius: 0px 0px 6px 6px;
    padding: 6px;
    background-color: #00000018;
    margin-bottom: 10px;
`

const PromptButton = styled.button`
    background-color: ${(props) => props.color || '#0000001e'};
    flex-grow: 1;
    border: none;
    color: white;
    font-size: .8rem;
    padding: 4px;
    cursor: pointer;
    outline: none;
    transition: 0.35s ease-out;
    border-radius: 6px;
    border: 1px solid transparent;
    &:hover {
        filter: brightness(1.3);
    }
`

// function ModifierComponent(props) {    
//     return (
//         <Modifier strength={props.strength} onDoubleClick={props.onDoubleClick}>
//             {props.showStrength ? '(' : null}
//             {props.children}
//             {props.showStrength ? `:${props.strength}` : null}
//             {props.showStrength ? ')' : null}
//         </Modifier>
//     );
//   }

function GenerationSettings({
    settings,
    inputImage,
    setSettings,
    className,
    modifiers,
    setModifiers,
    showStrength,
    setShowStrength,
    negativeModifiers,
    setNegativeModifiers,
    parameters,
    setParameters
    }){

    const [showModal, setShowModal] = useState(false);
    const [modifierType, setModifierType] = useState(null);
    const [promptValue, setPromptValue] = useState(parameters[parameters.length - 1].prompt);
    const [negativePromptValue, setNegativePromptValue] = useState(parameters[parameters.length - 1].negative_prompt);

    let typingTimer = null;

    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const HandleClearModifiers = (type) => {
        if(type === 'positive'){
            setModifiers([]);
        }else{
            setNegativeModifiers([]);
        }
    }

    const handleSetNewModifierType = (type) => {
        setModifierType(type);
    }

    const handleAddModifier = (value, strength) => {
        if(modifierType === 'positive'){
            setModifiers([...modifiers, {value, strength}]);
        }else{
            setNegativeModifiers([...negativeModifiers, {value, strength}]);
        }
    }

    const handleDoubleClick = (modifier) => {
        if (modifier.type === 'positive')
            setModifiers(modifiers.filter((mod) => mod !== modifier))
        else 
            setNegativeModifiers(negativeModifiers.filter((mod) => mod !== modifier))
    }

    const handlePromptChange = (e) => {
        clearTimeout(typingTimer);
        setPromptValue(e.target.value);

        if (promptValue[promptValue.length - 1] === " ") {
            console.log('SPACE')
            const newParameters = parameters.slice(0, 10);
            setParameters([...newParameters, { ...parameters[0], prompt: promptValue }]);
        }
    }

    useEffect(() => {
        if (promptValue[promptValue.length - 1] === " ") {
            console.log('Adding item to parameters history')
            const newParameters = parameters.slice(0, 10);
            setParameters([...newParameters, { ...parameters[0], prompt: promptValue }]);
        }
    }, [promptValue]);

    console.log(parameters)

    return (
        <OuterContainer>
            <Modal handleAddModifier={handleAddModifier} setShowModal={setShowModal} isOpen={showModal} onClose={handleCloseModal} setNegativeModifiers={setNegativeModifiers} setModifiers={setModifiers}>New {modifierType === 'negative' ? 'Negative' : null} Modifier</Modal>
            <Container>
                <PromptComponent parameters={parameters} setParameters={setParameters}>
                    <Modifers>
                        <Title>
                            <Label>Modifiers</Label>
                            <Button onClick={() => {
                                handleOpenModal()
                                handleSetNewModifierType('positive')
                                }} width={35} alignSelf={'end'}>+</Button>
                            <Button onClick={() => HandleClearModifiers('positive')} alignSelf={'end'}>Clear</Button>
                        </Title>
                        <ModifiersContainer>
                            {modifiers.map((modifier, index) => (
                                <ModifierPill
                                    onDoubleClick={() => handleDoubleClick(modifier)}
                                    key={index}
                                    showStrength={showStrength}
                                    modifier={modifier}
                                    setModifiers={setModifiers}
                                    modifiers={modifiers}
                                >
                                    {modifier.value}
                                </ModifierPill>
                            ))}
                        </ModifiersContainer>
                    </Modifers>
                </PromptComponent>
                
                <NegativePrompt>
                    <Label>Negative Prompt</Label>
                    <CustomInput />
                    <PromptGroup>
                        <PromptButton color='#198754' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faCheck} /></PromptButton>
                        <PromptButton color='#dc3545' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faTimes} /></PromptButton>
                        <PromptButton color='#0dcaf0' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faUndo} /></PromptButton>
                        <PromptButton color='#0dcaf0' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faRedo} /></PromptButton>
                    </PromptGroup>
                
                    <Modifers>
                        <Title>
                            <Label>Negative Modifiers</Label>
                            <Button onClick={() => {
                                handleOpenModal()
                                handleSetNewModifierType('negative')
                                }} width={35} alignSelf={'end'}>+</Button>
                            <Button onClick={() => HandleClearModifiers('negative')} alignSelf={'end'}>Clear</Button>
                        </Title>
                        <ModifiersContainer>
                            {negativeModifiers.map((modifier, index) => (
                                <ModifierPill
                                    onDoubleClick={() => handleDoubleClick(modifier)}
                                    key={index}
                                    showStrength={showStrength}
                                    modifier={modifier}
                                    modifiers={negativeModifiers}
                                    setModifiers={setNegativeModifiers}
                                >
                                    {modifier.value}
                                </ModifierPill>
                              
                            ))}
                        </ModifiersContainer>
                    </Modifers>
                </NegativePrompt>

            </Container>
        </OuterContainer>

    )
}

export default GenerationSettings










{/* <div style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '10px',
                    color: 'white',
                    }}>
                    <label>Width</label>
                    <select style={{flexGrow: 1}}>
                        <option value="1">512</option>
                        <option value="2">768</option>
                        <option value="3">1024</option>
                    </select>
                    <label>Height</label>
                    <select style={{flexGrow: 1}}>
                        <option value="1">512</option>
                        <option value="2">768</option>
                        <option value="3">1024</option>
                    </select>
                </div> */}