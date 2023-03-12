import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components';
import axios from 'axios';

// REDUX
import { Parameters } from './components/Parameters';

import './css/Variables.css';
import './css/flex.css';

import Notif from './audio/notification.mp3';

// COMPONENTS
import Navbar from './components/Navbar.jsx';
import SecondaryNavbar from './components/SecondaryNavbar';
import GenerationSettings from './components/GenerationSettings';
import ImageCanvas from './windows/ImageCanvas';
import JobsQueue from './components/JobsQueue';
import ImageButtons from './components/ImageButtons';
import SidePanel from './components/SidePanel';
import Canvas from './components/Canvas';

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
      "prompt": "an epic landscape",
      "seed": -1,
      "batch_size": 1,
      "steps": 10,
      "cfg_scale": 7,
      "width": 512,
      "height": 512,
      "restore_faces": false,
      "tiling": false,
      "negative_prompt": "(bad_prompt:0.8)",
      "sampler_index": "Euler a",
      
      "enable_hr": true,
      "hr_upscaler": "R-ESRGAN 4x+ Anime6B",
      "hr_scale": 2,
      "hr_second_pass_steps": 20,
      "denoising_strength": 0.7,
    }
  )
  const [settings, setSettings] = useState(defaultSettings) // need to check if this is the first time opening the app, if not, use the last settings you used
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([
    'https://www.researchgate.net/profile/R-Bastiaans/publication/242667254/figure/fig1/AS:298479747387394@1448174525356/Test-image-of-512x512-pixels-containing-1024-particles.png',
    // 'https://replicate.delivery/pbxt/AE5fg6Nbehm5fIkWbIVNsrK1jUEqRr8btVZwoQSEgMemLlpfB/out-0.png',
    // 'https://www.researchgate.net/profile/Andreas-Maier-12/publication/331111167/figure/fig1/AS:726417566359553@1550202852411/Example-images-of-size-512x512-px-approx-128x128m-from-the-canine-cutaneous-mast-cell.ppm',
  ])
  const [currentImage, setCurrentImage] = useState([
    'https://www.researchgate.net/profile/R-Bastiaans/publication/242667254/figure/fig1/AS:298479747387394@1448174525356/Test-image-of-512x512-pixels-containing-1024-particles.png',
     'https://replicate.delivery/pbxt/AE5fg6Nbehm5fIkWbIVNsrK1jUEqRr8btVZwoQSEgMemLlpfB/out-0.png',
      'https://www.researchgate.net/profile/Andreas-Maier-12/publication/331111167/figure/fig1/AS:726417566359553@1550202852411/Example-images-of-size-512x512-px-approx-128x128m-from-the-canine-cutaneous-mast-cell.ppm'
  ])
  const [jobs, setJobs] = useState([])
  const [inputImage, setInputImage] = useState(null)
  const [options, setOptions] = useState(
    {
      "jpeg_quality": 80,
      "upscaler_for_img2img": "SwinIR_4x",
      "sd_model_checkpoint": "Stable Diffusion\\v1-5-pruned-emaonly.ckpt [cc6cb27103]",
    }
  )

  const [parameters, setParameters] = useState([{
    "prompt": "an epic landscape",
    "seed": -1,
    "batch_size": 1,
    "steps": 10,
    "cfg_scale": 7,
    "width": 512,
    "height": 512,
    "restore_faces": false,
    "tiling": false,
    "negative_prompt": "(bad_prompt:0.8)",
    "sampler_index": "Euler a",
    "enable_hr": true,
    "hr_upscaler": "R-ESRGAN 4x+ Anime6B",
    "hr_scale": 2,
    "hr_second_pass_steps": 20,
    "denoising_strength": 0.7,
  }])

  const [layers, setLayers] = useState([{ 
    name: 'Layer 1', 
    id: 1, 
    visible: true, 
    opacity: 1, 
    blendMode: 'normal',
    type: 'image',
    image: 'https://www.researchgate.net/profile/R-Bastiaans/publication/242667254/figure/fig1/AS:298479747387394@1448174525356/Test-image-of-512x512-pixels-containing-1024-particles.png',
    width: 512,
    height: 512,
  }])
  const [showSidePanel, setShowSidePanel] = useState(true)
  const [canvasSize, setCanvasSize] = useState({ width: 1024, height: 1024 })
  const [selectedLayer, setSelectedLayer] = useState(null)
  const [modifiers, setModifiers] = useState([
    { value: 'highres', strength: 1.4, type: 'positive' },
    { value: 'lowres', strength: 0.7, type: 'positive' },
    { value: 'mediumres', strength: 1.0, type: 'positive' },
    { value: 'ultrares', strength: 1.8, type: 'positive' },
    { value: 'megares', strength: 1.6, type: 'positive' },
    { value: 'superres', strength: 1.2, type: 'positive' },
    { value: 'extrahighres', strength: 1.9, type: 'positive' },
    { value: 'maxres', strength: 2.0, type: 'positive' },
    { value: 'minres', strength: 0.1, type: 'positive' },
    { value: 'standardres', strength: 0.5, type: 'positive' }
  ])
  const [showStrength, setShowStrength] = useState(false)
  const [negativeModifiers, setNegativeModifiers] = useState([
    { value: 'lowres', strength: 0.3, type: 'negative' },
    { value: 'dark', strength: 0.2, type: 'negative' },
    { value: 'bright', strength: 0.7, type: 'negative' },
    { value: 'noisy', strength: 0.5, type: 'negative' },
    { value: 'blurry', strength: 0.4, type: 'negative' },
    { value: 'shaky', strength: 0.6, type: 'negative' },
    { value: 'flickering', strength: 0.9, type: 'negative' },
    { value: 'overexposed', strength: 0.1, type: 'negative' },
    { value: 'underexposed', strength: 0.8, type: 'negative' }
  ])

  function CompareImages() {
    if (history.length >= 2) {
      const [firstImage, secondImage, ...restImages] = history;
      setHistory([secondImage, firstImage, ...restImages]);
    }
  }

  function Generate() {

    var data = settings
    data.job_id = new Date().getTime().toString() + Math.random().toString().substr(2, 5);
    data.jobType = "/txt2img"
    data = JSON.stringify(data)

    var config = {
      method: 'post',
      url: '/jobs',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    // copy the jobs array and add the new job, then setJobs to the new array
    let newArr = [...jobs]
    newArr.unshift(JSON.parse(data))
    setJobs(newArr)
    
    axios(config)
    .then((response) => {
      const newImage = response.data.images;
      setHistory((prevImages) => [newImage].concat(prevImages));
      return response
    })
    .then((response) => {
      // console.log("removingJob")
      // // remove the job from the jobs array
      // let newArr = [...jobs]
      // newArr = newArr.filter(job => job.key !== JSON.parse(data).job_id)
      // setJobs(newArr)
    })
    .then(() => setLoading(false))
    .then(() => playAudio())
    
    .catch((error) => {
      console.log(error);
    });

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
      .then(result => {
        // setgalleryImgs(result)
      })
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
    
    // fetch("/gen-settings")
    // .then((result) => result.json())
    // .then((result) => setSettings(JSON.parse(result[0].gen_settings_inst)))
    // .then(() => console.log("Settings Loaded!"))

  }, [])
  
  useEffect(() => {
    // axios({
    //   method: 'post',
    //   url: '/gen-settings',
    //   data: settings
    // })
  }, [settings])

  useEffect(() => {
  
    // axios.get("/config")
    // .then((result) => result.data)
    // .then((result) => setOptions(JSON.parse(result[0].config)))
    // .then(() => console.log("Config Loaded!"))

  }, [])

  useEffect(() => {
    // axios({
    //   method: 'post',
    //   url: '/config',
    //   data: options
    // }).then(() => SetModel(options.sd_model_checkpoint))
  }, [options])

  useEffect(() => {

    // const interval = setInterval(() => {

    //   fetch("/sdapi/v1/progress?skip_current_image=false")
    //   .then((result) => result.json())
    //   .then((result) => {
    //     if (result.progress > 0.01) {

    //       setCurrentImage(() => {
    //         return [`data:image/png;charset=utf-8;base64,${result.current_image}`]
    //       }) 

    //       setProgress(result.progress)
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("No connection to SD:", error)
    //   })

    // }, progressTickRate)

    // return () => {
    //   clearInterval(interval)
    // }

  }, [])

  return (  
    <Container>
      <div className='main-nav'>
        <Navbar />
      </div>
      
      <Parameters></Parameters>

      {/* <div className='secondary-nav'>
        <SecondaryNavbar setOptions={setOptions} options={options} loading={loading} settings={settings} setSettings={setSettings} Generate={Generate}/>
      </div> */}

      <div className='main-container'>
        
        <div className='col-1'>
        <GenerationSettings 
          inputImage={inputImage} 
          modifiers={modifiers}
          setModifiers={setModifiers}
          showStrength={showStrength}
          setShowStrength={setShowStrength}
          negativeModifiers={negativeModifiers}
          setNegativeModifiers={setNegativeModifiers}
          parameters={parameters}
          setParameters={setParameters}
        />
        </div>
        
        <div className='col-2'>
          <Canvas layers={layers} setLayers={setLayers} canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
        </div>
        
        <div className='col-3'>
          {showSidePanel ? 
            <SidePanel layers={layers} setLayers={setLayers} /> 
          : null} 
        </div>

      </div>
    </Container>
  )

}

export default App;
