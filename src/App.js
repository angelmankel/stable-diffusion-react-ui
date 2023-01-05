import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components';

import './css/Variables.css';
import './css/flex.css';

// COMPONENTS
import Navbar from './components/Navbar.jsx';
import SecondaryNavbar from './components/SecondaryNavbar';
import GenerationSettings from './components/GenerationSettings';
import ImageCanvas from './windows/ImageCanvas';
import Gallery from './components/Gallery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--doc-height);
  background: linear-gradient(0deg, var(--gradient-dark) 0%, var(--gradient-light) 100%);
  overflow: hidden;
`

function App() {

  document.documentElement.style.setProperty('--doc-height', `${window.innerHeight - 0.01}px`);

  const [defaultSettings, setDefaultSettings] = useState(
    {
      "enable_hr": true,
      "prompt": "a sexy assassin wearing a tight fitting outfit. wide hips, big ass, big boobs, artgerm, jungle, sunny, god rays, 4k, 8k, dramatic lighting",
      "seed": 67884558,
      "batch_size": 1,
      "steps": 20,
      "cfg_scale": 8,
      "width": 512,
      "height": 512,
      "restore_faces": true,
      "tiling": false,
      "negative_prompt": "bloom, bad colors, smooth, deformed, ugly, creepy",
      "sampler_index": "Euler a"
    }
  )

  const [settings, setSettings] = useState(defaultSettings) // need to check if this is the first time opening the app, if not, use the last settings you used
  const [loading, setLoading] = useState(false)
  const [currentImage, setCurrentImage] = useState("https://miro.medium.com/max/512/0*EC_IgNn7B1wj4-gw.png")
  const [inputImage, setInputImage] = useState(null)
  const [galleryImgs, setgalleryImgs] = useState(null)
  const [options, setOptions] = useState(
    {
      "jpeg_quality": 100,
      "upscaler_for_img2img": "SwinIR_4x",
      "sd_model_checkpoint": "models\\Stable Diffusion\\v1-5-pruned-emaonly.ckpt [81761151]",
    }
  )

  function SaveImageToDB(img) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(img),
      redirect: 'follow',
    }

    fetch("/library", requestOptions)
  }

  function UpscaleImage(img) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(
        {
          "resize_mode": 0,
          "show_extras_results": true,
          "gfpgan_visibility": 0,
          "codeformer_visibility": 0,
          "codeformer_weight": 0,
          "upscaling_resize": 2,
          "upscaler_1": "SwinIR_4x",
          "extras_upscaler_2_visibility": 0,
          "image": JSON.stringify(img.images[0])
        }
      ),
      redirect: 'follow'
    }

    fetch("/sdapi/v1/extra-single-image", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setCurrentImage(`data:image/png;charset=utf-8;base64,${result.image}`)
        return result
      })
      .then((result) => {
        SaveImageToDB(result)
        return result.image
      })
      .then((result) => {
        let newArr = [...galleryImgs]
        newArr.unshift(`data:image/png;charset=utf-8;base64,${result}`)
        setgalleryImgs(newArr)
      })
      .then(() => setLoading(false))
  }

  function Generate() {
    setLoading(true)
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(settings),
      redirect: 'follow'
    };
    
    fetch("/sdapi/v1/txt2img", requestOptions)
      .then(response => response.json())
      .then(result => {
        UpscaleImage(result) 
        return result
      })
      .catch(error => console.log('error', error));
  }

  function GetImageLibrary() {
    console.log("Fetching Images...")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    
    fetch("/library", requestOptions)
      .then(response => response.json())
      .then(result => {
        for (let i = 0; i < result.length; i++) {
          result[i] = `data:image/png;charset=utf-8;base64,${result[i]}`
        }

        return result
      })
      
      .then(result => setgalleryImgs(result.reverse()))
  }

  function SetModel(model) {

    setLoading(true)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(options),
      redirect: 'follow'
    }

    fetch("/sdapi/v1/options", requestOptions)
      .then(() => setLoading(false))
  }

  useEffect(() => {
    GetImageLibrary()
  }, [])

  useEffect(() => {
    SetModel(options.sd_model_checkpoint)
  }, [options])

  return (  
    <Container>
      <div className='main-nav'>
        <Navbar />
      </div>

      <div className='secondary-nav'>
        <SecondaryNavbar setOptions={setOptions} options={options} loading={loading} settings={settings} setSettings={setSettings} Generate={Generate} GetImageLibrary={GetImageLibrary}/>
      </div>

      <div className='main-container'>
        
        <div className='col-1'>
          <GenerationSettings settings={settings} inputImage={inputImage} setSettings={setSettings} className='settings' />
        </div>
          
        <div className='col-2'>
          <ImageCanvas currentImage={currentImage} settings={settings} setSettings={setSettings} />
        </div>
        
        <div className='col-3'>
          <Gallery galleryImgs={galleryImgs} />
        </div>
      
      </div>
    </Container>
  )

}

export default App;
