import React, {useCallback} from 'react'
import '../Gallery.css';
import styled from 'styled-components';
import {useDropzone} from 'react-dropzone'
import fs from 'fs'
import path from 'path'

function MyDropzone() {

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        console.log("worky")
        return 
        acceptedFiles.forEach((file) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          console.log("worky", binaryStr)
        }
        reader.readAsArrayBuffer(file)
      })
      
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})
  
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    )
  }

const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #565364;
    padding: 10px;
`;

const handleDrag = (e) => {

    if (!e) return;

    console.log("Start Dragging");
}

const Images = () => {
    
    let onlyPath = path.dirname('./images/test')
    console.log(fs)
    // <img src={require('/images/')} />

    return

}


function Gallery() {
  return (
    <div className="row"> 
        <div className="column">
            <MyDropzone></MyDropzone>
            <Images></Images>
        </div>

        <div className="column">
            <img onDragStart={(e) => handleDrag(e)} onDragEnter={() => console.log("test worky")} src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"} style={{"width" : "100%"}} />
        </div>

        <div className="column">
            <img onDragStart={(e) => handleDrag(e)} src={"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"} style={{"width" : "100%"}} />
        </div>

        <div className="column">
            <img onDragStart={(e) => handleDrag(e)} src={"https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{"width" : "100%"}} />
        </div>

        <div className="column">
            <img onDragStart={(e) => handleDrag(e)} src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"} style={{"width" : "100%"}} />
            <img onDragStart={(e) => handleDrag(e)} src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} style={{"width" : "100%"}} />
        </div>
    </div>
  )
}

export default Gallery