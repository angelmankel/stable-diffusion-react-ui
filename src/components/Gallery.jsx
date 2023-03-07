import React from 'react'
import '../Gallery.css';
import styled from 'styled-components';
import Image from './Image';

const Container = styled.div`
    overflow-y: scroll;
    max-height: 100%;
    min-width: 100%;
    background-color: var(--secondary-panel-color);
    padding-top: 10px;
    padding-bottom: 10px;
    
    /* remove this is if the gallery is broken */
    height: 100%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

// Create on click event for each image that will open the non compressed version from the server. Need to have a ref to the image file name or something.

function Gallery(props) {

  function handleSingleClick(img) {
    props.setCurrentImage([img.image])
  }

  function handleDoubleClick(img) {
    props.setSettings(JSON.parse(img.parameters))
    props.setCurrentImage([img.image])
  }

  let images

  if (props.galleryImgs != null)
  {
    images = props.galleryImgs.map((img, index) =>
      <Image onDoubleClick={() => handleDoubleClick(img)} onClick={() => handleSingleClick(img)} params={img.parameters} info={img.info} key={img.image_id} src={`${img.image}`} />
    )
  }

  return (
    <Container>
      <Row> 
        {images}
      </Row>
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