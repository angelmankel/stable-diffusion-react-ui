import React from 'react'
import styled from 'styled-components'

const SidePanelContainer = styled.div`
    background-color: #1e1e1e;
    color: white;
    /* width: 100%;
    height: 100%; */
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function SidePanel({ layers, setLayer }) {
  return (
    <SidePanelContainer>
        {layers.map((layer, index) => (
            <div key={index} onClick={() => setLayer(index)}>
                {layer.name}
            </div>
        ))}
    </SidePanelContainer>
  )
}

export default SidePanel