import React from 'react'
import { useState, useLayoutEffect, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components';
import axios from 'axios';

import './css/Variables.css';
import './css/flex.css';

import Notif from './audio/notification.mp3';

// COMPONENTS
import Navbar from './components/Navbar.jsx';
import SecondaryNavbar from './components/SecondaryNavbar';
import GenerationSettings from './components/GenerationSettings';
import ImageCanvas from './windows/ImageCanvas';
import Gallery from './components/Gallery';
import Image from './components/Image.jsx';
import ImageButtons from './components/ImageButtons';
import JobsQueue from './components/JobsQueue';

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
      "hr_upscaler": "SwinIR_4x",
    }
  )

  const [settings, setSettings] = useState(defaultSettings) // need to check if this is the first time opening the app, if not, use the last settings you used
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([
    // 'https://www.researchgate.net/profile/R-Bastiaans/publication/242667254/figure/fig1/AS:298479747387394@1448174525356/Test-image-of-512x512-pixels-containing-1024-particles.png',
    // 'https://replicate.delivery/pbxt/AE5fg6Nbehm5fIkWbIVNsrK1jUEqRr8btVZwoQSEgMemLlpfB/out-0.png',
    // 'https://www.researchgate.net/profile/Andreas-Maier-12/publication/331111167/figure/fig1/AS:726417566359553@1550202852411/Example-images-of-size-512x512-px-approx-128x128m-from-the-canine-cutaneous-mast-cell.ppm',
  ])
  const [inputImage, setInputImage] = useState(null)
  const [progress, setProgress] = useState(0.01)
  const [galleryImgs, setgalleryImgs] = useState(null)
  const [progressTickRate, setProgressTickRate] = useState(1000)
  const [options, setOptions] = useState(
    {
      "jpeg_quality": 80,
      "upscaler_for_img2img": "SwinIR_4x",
      "sd_model_checkpoint": "Stable Diffusion\\v1-5-pruned-emaonly.ckpt [cc6cb27103]",
    }
  )
  const [jobs, setJobs] = useState([])

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
        setHistory(`data:image/png;charset=utf-8;base64,${result.image}`)
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

    var data = settings
    data.job_id = new Date().getTime().toString() + Math.random().toString().substr(2, 5);
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
    newArr.unshift(data)
    setJobs(newArr)
    
    axios(config)
    .then((response) => {
      const newImage = response.data.images;
      setHistory((prevImages) => [newImage].concat(prevImages));
    })
    .then(() => setLoading(false))
    .then(() => playAudio())
    // .then(() => clearInterval(progressInterval))
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
        setgalleryImgs(result)
      })
  }

  function CompareImages() {
    if (history.length >= 2) {
      const [firstImage, secondImage, ...restImages] = history;
      setHistory([secondImage, firstImage, ...restImages]);
    }
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
    //GetImageLibrary()
  }, [])

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
      
      <div className='secondary-nav'>
        <SecondaryNavbar Interrupt={Interrupt} progress={progress} setOptions={setOptions} options={options} loading={loading} settings={settings} setSettings={setSettings} Generate={Generate} GetImageLibrary={GetImageLibrary}/>
      </div>

      <div className='main-container'>
        
        <div className='col-1'>
          <GenerationSettings settings={settings} inputImage={inputImage} setSettings={setSettings} className='settings' />
        </div>
        
        <div className='col-2'>
          <ImageButtons Interrupt={Interrupt} progress={progress} setOptions={setOptions} options={options} loading={loading} settings={settings} setSettings={setSettings} Generate={Generate} GetImageLibrary={GetImageLibrary} images={history} CompareImages={CompareImages}/>
          <ImageCanvas images={history} />
        </div>
        
        <div className='col-3'>
          {/* <Gallery galleryImgs={galleryImgs} setCurrentImage={setHistory} setSettings={setSettings}/> */}
          <JobsQueue jobs={jobs} />
        </div>

      </div>
    </Container>
  )

}

export default App;
