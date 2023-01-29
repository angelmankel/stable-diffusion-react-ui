import React from 'react'
import '../Gallery.css';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #565364;
    padding: 10px;
`;

const Container = styled.div`
    overflow-y: scroll;
    max-height: 100%;
    min-width: 100%;
    background-color: #565364;
    z-index: -1;
`;

const handleDrag = (e) => {
    if (!e) return;
}

// Create on click event for each image that will open the non compressed version from the server. Need to have a ref to the image file name or something.

function Gallery(props) {

  let images

  if (props.galleryImgs != null)
  {
    images = props.galleryImgs.map((img, index) =>
      <img onClick={() => console.log("worky!")} key={index} src={`${img}`} style={{"width" : "100%"}} />
    )
  }


  return (
    <Container>
      <div className="row"> 
        <div className="column">
          {images}
        </div>
      </div>
    </Container>

    /* <div className="column">
        <img src={"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"} style={{"width" : "100%"}} />
        <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{"width" : "100%"}} />
        <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} style={{"width" : "100%"}} />
        <img src={"https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"} style={{"width" : "100%"}} />
    </div>

    <div className="column">
        <img src={"https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"} style={{"width" : "100%"}} />
        <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} style={{"width" : "100%"}} />
        <img src={"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"} style={{"width" : "100%"}} />
        <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{"width" : "100%"}} />
    </div>

    <div className="column">
        <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} style={{"width" : "100%"}} />
        <img src={"https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"} style={{"width" : "100%"}} />
        <img src={"https://i.pinimg.com/736x/d6/90/95/d69095c461cec89c4469425dc1fd23e6.jpg"} style={{"width" : "100%"}} />
        <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} style={{"width" : "100%"}} />
    </div> */

  )
}

export default Gallery