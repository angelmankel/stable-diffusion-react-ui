import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import styled from 'styled-components';

import './css/Variables.css';
import './css/flex.css';

// COMPONENTS
import Navbar from './components/Navbar.jsx';
import PromptBar from './components/SecondaryNavbar';
import GenerationSettings from './components/GenerationSettings';
import ImageCanvas from './windows/ImageCanvas';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(0deg, var(--gradient-dark) 0%, var(--gradient-light) 100%);
`

function App() {

  const [defaultSettings, setDefaultSettings] = useState(
    {
      "enable_hr": false,
      "denoising_strength": 0,
      "firstphase_width": 0,
      "firstphase_height": 0,
      "prompt": "a crocodile eating a carrot",
      "styles": [
        "string"
      ],
      "seed": 23,
      "subseed": 51,
      "subseed_strength": 0,
      "seed_resize_from_h": -1,
      "seed_resize_from_w": -1,
      "batch_size": 8,
      "n_iter": 1,
      "steps": 10,
      "cfg_scale": 7,
      "width": 512,
      "height": 512,
      "restore_faces": false,
      "tiling": false,
      "negative_prompt": "(bad_prompt:0.8), ugly, deformed",
      "eta": 0,
      "s_churn": 0,
      "s_tmax": 0,
      "s_tmin": 0,
      "s_noise": 1,
      "override_settings": {},
      "sampler": "Euler"
    }
  )

  const [txt2img, setTxt2img] = useState(defaultSettings) // need to check if this is the first time opening the app, if not, use the last settings you used

  // "https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"
  const [currentImage, setCurrentImage] = useState("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")

  function Generate() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(txt2img);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://192.168.1.162:7860/sdapi/v1/txt2img", requestOptions)
      .then(response => response.text())
      .then(result => setCurrentImage(JSON.parse(result).images[0]))
      .catch(error => console.log('error', error));
  }

  return (  
    <Container>
      <div className='main-nav'>
        <Navbar />
      </div>

      <div className='secondary-nav'>
        <PromptBar txt2img={txt2img} setTxt2img={setTxt2img} />
      </div>

      {/* <div className='main-container'>
        
        <div className='col-1'>
          <GenerationSettings txt2img={txt2img} setTxt2img={setTxt2img} className='settings' />
        </div>
          
        <div className='col-2'>
          <ImageCanvas txt2img={txt2img} setTxt2img={setTxt2img} />
        </div>
        
        <div className='col-3'>
          <div className='recents'>Recent Images</div>
        </div>
      
      </div> */}
    </Container>
  )

}

export default App;
