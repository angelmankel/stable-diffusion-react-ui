import React from 'react'
import styled from 'styled-components'

function Input(props) {
  return (
    <input className={props.className} value={props.value} type="text" />
  )
}

export default Input