import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import styled from 'styled-components';

// import './App.css';
// import './css/custom.css';
import './css/Variables.css';
import './css/flex.css';

// COMPONENTS
import Navbar from './components/Navbar.jsx';
import PromptBar from './components/SecondaryNavbar';
import GenerationSettings from './components/GenerationSettings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* background-color: var(--primary-panel-color); */
  background: linear-gradient(0deg, var(--gradient-dark) 0%, var(--gradient-light) 100%);
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
    <Container>
      <div className='main-nav'>
        <Navbar />
      </div>

      <div className='secondary-nav'>
        <PromptBar />
      </div>

      <div className='main-container'>
        
        <div className='col-1'>
          <GenerationSettings className='settings' />
        </div>
          
        <div className='col-2'>
          <div className='image-area'>Image Area</div>
        </div>
        
        <div className='col-3'>
          <div className='recents'>Recent Images</div>
        </div>
      
      </div>
    </Container>
  )

}

export default App;
