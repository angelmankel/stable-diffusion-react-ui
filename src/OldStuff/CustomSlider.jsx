import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// const StyledSlider = styled.input`
//   -webkit-appearance: none;  /* Override default CSS styles */
//   appearance: none;
//   width: 100%; /* Full-width */
//   height: 25px; /* Specified height */
//   background: var(--secondary-panel-color); /* Grey background */
//   outline: none; /* Remove outline */
//   opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
//   -webkit-transition: .2s; /* 0.2 seconds transition on hover */
//   transition: opacity .2s;
//   border-radius: 5px;

//   &:hover {
//     opacity: 1; /* Fully shown on mouse-over */
//   }

//   &::-webkit-slider-thumb {
//     -webkit-appearance: none; /* Override default look */
//     appearance: none;
//     width: 35px; /* Set a specific slider handle width */
//     height: 35px; /* Slider handle height */
//     background: var(--muted-outline); /* Green background */
//     cursor: pointer; /* Cursor on hover */
//     border-radius: 20px;

//   }


// `

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     align-items: center;
//     padding: 20px;
// `

// const Label = styled.label`
//     color: white;
// `

// const Value =  styled.div`
//     position: absolute;
// `

// const SliderContainer = styled.div`

// `

function CustomSlider() {
    
    return (
        <>
        <Slider />
        {/* <Range /> */}
        </>
    )

    // const [increment, setIncrement] = useState(10)
    // const [value, setValue] = useState(50)
  
    // useEffect(() => {
    //     console.log(value)
    // }, [value])

    // function UpdateSliderValue(e) {
    //     if (e.target.value % increment === 0 || e.target.value < increment) {
            
    //         if (e.target.value < increment)
    //         {
    //             setValue(1)
    //         } else {
    //             setValue(e.target.value)
    //         }
    //     }
    // }

    // return (
    //     <Container>
    //         <Label>Test</Label>
            
    //         <SliderContainer>
    //             <Value>{value}</Value>
    //             <StyledSlider onInput={UpdateSliderValue} type="range" min="1" max="100" value={value} />
    //         </SliderContainer>
    //     </Container>
    // )
}

export default CustomSlider