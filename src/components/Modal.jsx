import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const NumberInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const Modal = ({ children, isOpen, onClose, handleAddModifier, setShowModal }) => {
    const [value, setValue] = useState('');
    const [strength, setStrength] = useState(0.5);

    function handleSubmit () {
        handleAddModifier(value, strength);
        setValue('');
        setStrength(0.5);
        setShowModal(false);
    }

    function handleSubmitAndNew () {
        handleAddModifier(value, strength);
        setValue('');
        setStrength(0.5);
        setShowModal(true);
    }

    return (
        <>
        {isOpen && (
            <ModalContainer>
            <ModalContent>
                <h2>{children}</h2>
                <InputGroup>
                <InputLabel>Modifier:</InputLabel>
                <InputField
                    id="modifier-input"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                </InputGroup>
                <InputGroup>
                <InputLabel>Strength:</InputLabel>
                <NumberInput
                    type="number"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={strength}
                    onChange={(e) => setStrength(e.target.value)}
                />
                </InputGroup>
                <button onClick={() => handleSubmit(value, strength)}>Submit</button>
                <button onClick={() => handleSubmitAndNew(value, strength)}>Submit & New</button>
                <button onClick={onClose}>Close</button>
            </ModalContent>
            </ModalContainer>
        )}
        </>
    )
}

export default Modal;
