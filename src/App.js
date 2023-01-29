import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components';

import './css/Variables.css';
import './css/flex.css';

import Notif from './audio/notification.mp3';

// COMPONENTS
import Navbar from './components/Navbar.jsx';
import SecondaryNavbar from './components/SecondaryNavbar';
import GenerationSettings from './components/GenerationSettings';
import ImageCanvas from './windows/ImageCanvas';
import Gallery from './components/Gallery';

const playAudio = () => {
  let audio = new Audio(Notif)
  audio.volume = 0.5;
  audio.play(); 
}

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
      "enable_hr": false,
      "prompt": "stone walls, overgrowth, jungle, sunny, god rays, 4k, 8k, dramatic lighting, Art Station, Award Winning, unreal engine, HDR, Ray Tracing, RTX, intricate designs, dim lighting, epic mural, modern art",
      "seed": 6784558,
      "batch_size": 1,
      "steps": 20,
      "cfg_scale": 7,
      "width": 512,
      "height": 512,
      "restore_faces": false,
      "tiling": false,
      "negative_prompt": "(bad_prompt:0.8)",
      "sampler_index": "Euler a"
    }
  )

  const [settings, setSettings] = useState(defaultSettings) // need to check if this is the first time opening the app, if not, use the last settings you used
  const [loading, setLoading] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [inputImage, setInputImage] = useState(null)
  const [progress, setProgress] = useState(0.01)
  const [galleryImgs, setgalleryImgs] = useState(null)
  const [progressTickRate, setProgressTickRate] = useState(500)
  const [options, setOptions] = useState(
    {
      "jpeg_quality": 80,
      "upscaler_for_img2img": "SwinIR_4x",
      "sd_model_checkpoint": "Alien Landscapes\\alienLandscapes_alienLandscapes.ckpt [5222ef225a]",
    }
  )

  function Interrupt() {

    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
    }

    fetch("/sdapi/v1/interrupt", requestOptions)
  }

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
      .then(() => playAudio())
  }

  function Generate() {

    fetch("/txt2img", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      })
      .then(response => response.json())
      .then(images =>  {
        setCurrentImage(images)
      })
      // Make this only get the last image and not the entire library again
      .then(() => GetImageLibrary())
      .then(() => setLoading(false))
      .then(() => playAudio())

    setLoading(true)
  }

  function GetImageLibrary() {
    console.log("Fetching Images...")
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    
    fetch("/library", requestOptions)
      .then(response => response.json())      
      .then(result => setgalleryImgs(result))
  }

  function SetModel(model) {

    // Change this to a designated model spinner
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


  useEffect(() => {

    const interval = setInterval(() => {

      fetch("/sdapi/v1/progress?skip_current_image=false")
      .then((result) => result.json())
      .then((result) => {
        if (result.progress > 0.01) {

          setCurrentImage(() => {
            return [`data:image/png;charset=utf-8;base64,${result.current_image}`]
          }) 

          setProgress(result.progress)
        }
      })

    }, progressTickRate)

    return () => {
      clearInterval(interval)
    }

  }, [])

  return (  
    <Container>
      {/* <div className='main-nav'>
        <Navbar />
      </div> */}

      <div className='secondary-nav'>
        <SecondaryNavbar Interrupt={Interrupt} progress={progress} setOptions={setOptions} options={options} loading={loading} settings={settings} setSettings={setSettings} Generate={Generate} GetImageLibrary={GetImageLibrary}/>
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
