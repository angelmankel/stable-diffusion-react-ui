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
import Slider from './components/CustomSlider';

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
  "https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"
  const [currentImage, setCurrentImage] = useState("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")

  function Generate() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "enable_hr": false,
      "denoising_strength": 0,
      "firstphase_width": 0,
      "firstphase_height": 0,
      "prompt": "a crocodile eating a carrot",
      "styles": [
        "string"
      ],
      "seed": -1,
      "subseed": -1,
      "subseed_strength": 0,
      "seed_resize_from_h": -1,
      "seed_resize_from_w": -1,
      "batch_size": 1,
      "n_iter": 1,
      "steps": 10,
      "cfg_scale": 7,
      "width": 1024,
      "height": 512,
      "restore_faces": false,
      "tiling": false,
      "negative_prompt": "string",
      "eta": 0,
      "s_churn": 0,
      "s_tmax": 0,
      "s_tmin": 0,
      "s_noise": 1,
      "override_settings": {},
      "sampler_index": "Euler"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://192.168.1.162:7860/sdapi/v1/txt2img", requestOptions)
      .then(response => response.text())
      // .then(result => console.log(result))
      .then(result => setCurrentImage(JSON.parse(result).images[0]))
      .catch(error => console.log('error', error));
  }

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
          <PromptPanel currentImage={currentImage} Generate={Generate} grow={8} />
          {/* <PromptPanel grow={10} /> */}

          {/* Recent Images */}
          <CollapsablePanel side={'left'} grow={4} />

        </Container>
    </MainContainer>
  )

}

export default App;
