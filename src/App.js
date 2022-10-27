import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
// CSS
import './App.css';
import './css/custom.css';
import './css/Variables.css';
// COMPONENTS
import Navbar from './components/Navbar.jsx';
import Container from './components/Container';
import Panel from './components/Panel';
import PanelRow from './components/PanelRow';
import PanelColumn from './components/PanelColumn';
import MainContainer from './components/MainContainer';
import RecallPanel from './components/RecallPanel';
import PromptPanel from './components/PromptPanel';
import Input from './components/Input';
import RecentImagesPanel from './components/RecentImagesPanel';
import CollapsablePanel from './components/CollapsablePanel';
import Slider from './components/Slider';

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const WorkArea = styled.div`
  display: flex;
  height: 100%;
`

function App() {

  return (  
    // FULL HEIGHT CONTAINER
    <MainContainer>
        {/* NAVBAR */}
        <Navbar />
        {/* CONTENT */}
        <Container>

          {/* Settings */}
          <CollapsablePanel side={'right'} grow={3}>
            <Slider type="range" min="1" max="100" value="50" id="myRange" />
          </CollapsablePanel>

          {/* Prompt Area */}
          <PromptPanel grow={8} />
          {/* <PromptPanel grow={10} /> */}

          {/* Recent Images */}
          <CollapsablePanel side={'left'} grow={4} />

        </Container>
    </MainContainer>
  )

}

export default App;
