import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: white;
    filter: drop-shadow(0px 0px 5px rgba(0,0,0,1));
    margin-right: 7px;
    font-size: 1.5vw;
`

function Icon(props) {
  return (
    <StyledFontAwesomeIcon icon={props.ico}/>
  )
}

export default Icon