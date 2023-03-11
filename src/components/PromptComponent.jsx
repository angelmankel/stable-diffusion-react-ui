import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'

const Prompt = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background-color: #00000018;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const PromptGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
    border-radius: 0px 0px 6px 6px;
    padding: 6px;
    background-color: #00000018;
    margin-bottom: 10px;
`;

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
`;

const Label = styled.div`
    font-size: 1rem;
    color: #ffffffc5;
    font-weight: 700;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    flex-grow: 1;
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

const handlePromptChange = (e) => {
  setPromptValue(e.target.value);

  if (promptValue[promptValue.length - 1] === " ") {
    console.log('SPACE')
    const newParameters = parameters.slice(0, 10);
    setParameters([...newParameters, { ...parameters[0], prompt: promptValue }]);
  }
};

const handleConfirm = () => {
    const newParameters = parameters.slice(0, 10);
    setParameters([...newParameters, { ...parameters[0], prompt: promptValue }]);
};

const handleClear = () => {
    setPromptValue('');
};

const handleUndo = () => {
    if (parameters.length > 1) {
        const newParameters = parameters.slice(0, parameters.length - 1);
        setParameters(newParameters);
        setPromptValue(newParameters[newParameters.length - 1].prompt);
    }
};

const handleRedo = () => {
    if (parameters.length < 10) {
        const newParameters = parameters.slice(0, parameters.length + 1);
        setParameters(newParameters);
        setPromptValue(newParameters[newParameters.length - 1].prompt);
    }
};

function PromptComponent({children, parameters, setParameters}) {
    const [modifierType, setModifierType] = useState(null);
    const [promptValue, setPromptValue] = useState(parameters[parameters.length - 1].prompt);
  
    return (
        <Prompt>
            <Label>Prompt</Label>
            <CustomInput value={promptValue} onChange={handlePromptChange} />
            <PromptGroup>
                <PromptButton onClick={handleConfirm} color='#198754' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faCheck} /></PromptButton>
                <PromptButton onClick={handleClear} color='#dc3545' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faTimes} /></PromptButton>
                <PromptButton onClick={handleUndo} color='#0dcaf0' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faUndo} /></PromptButton>
                <PromptButton onClick={handleRedo} color='#0dcaf0' ><FontAwesomeIcon style={{ filter: 'drop-shadow(1px 1px 2px rgb(0, 0, 0))' }} icon={faRedo} /></PromptButton>
            </PromptGroup>
            
            {children}
        </Prompt>
    )
}

export default PromptComponent