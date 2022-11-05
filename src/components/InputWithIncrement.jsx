import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from './Icon';
import { faDice } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 2;
`
const RightButton = styled.button`
    background-color: var(--primary-panel-color);
    color: var(--primary-text-color);
    border: none;
    
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    width: 30px;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const LeftButton = styled.button`
    background-color: var(--primary-panel-color);
    color: var(--primary-text-color);
    border: none;
    
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    width: 30px;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Input = styled.input`
    background-color: var(--secondary-panel-color);
    color: var(--primary-text-color);
    border: none;
    width: 100%;
    height: 30px;
    font-size: 1.5rem;
    text-align: center;
`
const RandButton = styled.button`
    background-color: var(--primary-panel-color);
    color: var(--primary-text-color);
    border: none;
    flex-grow: 1;
    border-radius: 5px;
    height: 100%;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

function InputWithIncrement(props) {
    const [value, setValue] = useState(GetRandom());

    function HandleChange(e) {
        
        if (!isNaN(parseInt(e.target.value))) {
            setValue((parseInt(e.target.value)))
            return
        }

        return
    }

    function Increment(val) {
        setValue(value + val)
    }

    function GetRandom() {
        return Math.floor(Math.random() * 100000000)
    }

    function SetRandom(num) {
        isNaN(setValue(num)) ? setValue(GetRandom()) : setValue(num)
    }

    return (
        <OuterContainer>
            <label className='label'>{props.children}</label>
            <Container>
                <InputContainer>
                    <LeftButton onClick={() => Increment(-1)}>-</LeftButton>
                    <Input value={value} onChange={HandleChange}/>
                    <RightButton onClick={() => Increment(1)}>+</RightButton>
                </InputContainer>
                <RandButton onClick={() => SetRandom(GetRandom())}><Icon ico={faDice}/></RandButton>
            </Container>
        </OuterContainer>
    )
}

export default InputWithIncrement
