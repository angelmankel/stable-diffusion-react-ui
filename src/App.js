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

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 7;
`
const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const TopRow = styled.div`
  display: flex;
  height: 100%;
`

const BottomRow = styled.div`
  display: flex;
  height: 100%;
  height: 40%;
`

function App() {

  return (  
    // FULL HEIGHT CONTAINER
    <MainContainer>
        {/* NAVBAR */}
        <Navbar />
        {/* CONTENT */}
        <Container>
          {/* LEFT CONTAINER */}
          <LeftArea>
            {/* LEFT CONTAINER TOP ROW */}
            <TopRow>
              <RecallPanel>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
              </RecallPanel>
              <PromptPanel grow={7}>
                <label>Prompt</label>
                <textarea id="w3review" name="w3review" rows="2" cols="100"></textarea>
                <img src="https://cdn2.iconfinder.com/data/icons/essential-web-5/50/placeholder-dash-dot-disapear-frame-512.png" alt="Girl in a jacket" width="512" height="512"></img>
              </PromptPanel>
            </TopRow>
            {/* LEFT CONTAINER BOTTOM ROW */}
            <BottomRow>
              <Panel>
                <div>RECENT IMAGES</div> 
              </Panel>
            </BottomRow>
          </LeftArea>
          {/* RIGHT CONTAINER */}
          <RightArea>
            {/* SETTINGS PANEL */}
            <Panel>
              <div>SETTINGS PANEL</div>
            </Panel>
          </RightArea>
        </Container>
    </MainContainer>
  )

}

export default App;
