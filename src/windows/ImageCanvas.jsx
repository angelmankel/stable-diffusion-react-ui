// https://www.researchgate.net/profile/R-Bastiaans/publication/242667254/figure/fig1/AS:298479747387394@1448174525356/Test-image-of-512x512-pixels-containing-1024-particles.png
// https://replicate.delivery/pbxt/AE5fg6Nbehm5fIkWbIVNsrK1jUEqRr8btVZwoQSEgMemLlpfB/out-0.png
// https://www.researchgate.net/profile/Andreas-Maier-12/publication/331111167/figure/fig1/AS:726417566359553@1550202852411/Example-images-of-size-512x512-px-approx-128x128m-from-the-canine-cutaneous-mast-cell.ppm
// https://xmple.com/wallpaper/linear-highlight-red-gradient-black-512x512-c2-000000-8b0000-l-50-a-270-f-21.svg
// I want a functional react component called ImageCanvas that will display one image of an array of images at a time. The user should be able to press the left and right arrow keys to switch between the different images. The component should utilize css flex box and should fill all the remaining space. Assume the parent div it will be a child of will have a static height.

import React, { useState, useEffect } from 'react';

const ImageCanvas = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) { // Left arrow key
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    } else if (e.keyCode === 39) { // Right arrow key
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const currentImage = images[currentIndex];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <img
        src={currentImage}
        alt={`Image ${currentIndex + 1}`}
        style={{ objectFit: 'contain', flex: 1, maxHeight: '100%' }}
      />
    </div>
  );
};


export default ImageCanvas;
