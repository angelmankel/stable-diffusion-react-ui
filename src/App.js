import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import styled from 'styled-components';

import './css/Variables.css';
import './css/flex.css';

// COMPONENTS
import Navbar from './components/Navbar.jsx';
import SecondaryNavbar from './components/SecondaryNavbar';
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
      "denoising_strength": 0.7,
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
      "batch_size": 1,
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

  const [settings, setSettings] = useState(defaultSettings) // need to check if this is the first time opening the app, if not, use the last settings you used

  // console.log(settings.negative_prompt)
  // console.log(settings.prompt)
  console.log(settings)
  // console.log('------------------------------')

  // "https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"
  const [currentImage, setCurrentImage] = useState("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")
  const [inputImage, setInputImage] = useState("https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg")

  function Generate() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(settings);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://192.168.1.162:7860/sdapi/v1/settings", requestOptions)
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
        <SecondaryNavbar settings={settings} setSettings={setSettings} />
      </div>

      <div className='main-container'>
        
        <div className='col-1'>
          <GenerationSettings settings={settings} inputImage={inputImage} setSettings={setSettings} className='settings' />
        </div>
          
        {/* <div className='col-2'>
          <ImageCanvas settings={settings} setSettings={setSettings} />
        </div> */}
        
        {/* <div className='col-3'>
          <div className='recents'>Recent Images</div>
        </div> */}
      
      </div>
    </Container>
  )

}

export default App;
