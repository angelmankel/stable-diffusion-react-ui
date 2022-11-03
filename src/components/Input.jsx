import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 3px;
    border-radius: 5px;
    font-size: smaller;
    
`

function Input(props) {
  return (
    <input className={props.className} value={props.value} type="text" />
  )
}

export default Input