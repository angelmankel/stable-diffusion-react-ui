import React, { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import Input from './Input.jsx';
import '../css/CustomSlider.css';
// import SliderTooltip from 'rc-slider';
// import styled from 'styled-components';
import Icon from './Icon.jsx';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const ActiveMark = styled.div`
    color: var(--primary-text-color);
    font-weight: bold;
`

const LabelContainer = styled.div`
    color: var(--primary-text-color);
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
`

function CustomSlider(props) {

    const [value, setValue] = useState(props.defaultValue);
    const [marks, setMarks] = useState(props.marks ? GenerateMarks(props.step) : 0);

    function GenerateMarks(steps) {
        let marks = {}

        for (let i = 0; i < props.max + 1; i += steps) {
            marks[i] = i === value ? <ActiveMark>{i}</ActiveMark> : i;
        }

        return marks
    }

    function HandleChange(e) {
        setValue(e)
    }

    function HandleInputChange(e) {
        setValue(e.target.value)
    }

    function Increment(val) {
        if (value + val >= props.max) {
            setValue(props.max)
        } else if (value + val <= props.min) {
            setValue(props.min)
        } else {
            setValue(value + val)
        }
    }

    return (
        <div>
            <div className='label-container'>
                <label className='label'>{props.children}</label>
                <input className='input' onChange={HandleInputChange} value={value} type="text" />
            </div>
            <div className='slider-container'>
                <button onClick={() => Increment(-props.step)} className='slider-button minus'><Icon className="icon" ico={faMinus}></Icon></button>
                <Slider setValue={setValue} className='slider' marks={marks} step={props.step} min={props.min} max={props.max} onChange={HandleChange} value={value}></Slider>
                <button onClick={() => Increment(props.step)} className='slider-button plus'><Icon className="icon" ico={faPlus}></Icon></button>
            </div>
        </div>
    )
}

export default CustomSlider