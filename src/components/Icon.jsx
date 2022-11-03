import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: white;
    filter: drop-shadow(0px 0px 5px rgba(0,0,0,1));
    font-size: 2.5em;
`

function Icon(props) {
  return (
    <FontAwesomeIcon className={props.className} icon={props.ico}/>
  )
}

export default Icon