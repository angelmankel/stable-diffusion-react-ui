// https://www.researchgate.net/profile/R-Bastiaans/publication/242667254/figure/fig1/AS:298479747387394@1448174525356/Test-image-of-512x512-pixels-containing-1024-particles.png
// https://replicate.delivery/pbxt/AE5fg6Nbehm5fIkWbIVNsrK1jUEqRr8btVZwoQSEgMemLlpfB/out-0.png
// https://www.researchgate.net/profile/Andreas-Maier-12/publication/331111167/figure/fig1/AS:726417566359553@1550202852411/Example-images-of-size-512x512-px-approx-128x128m-from-the-canine-cutaneous-mast-cell.ppm
// https://xmple.com/wallpaper/linear-highlight-red-gradient-black-512x512-c2-000000-8b0000-l-50-a-270-f-21.svg

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

    const Overlay = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        align-items: center;
        ${Container}:hover {
            opacity: 1;
        }

        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

        backdrop-filter: blur(100px);

        transition: opacity 0.25s ease;
    `;

    const Container = styled.div`
        position: relative;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
    `;

    const Images = styled.div`
        max-width: 100%;
        max-height: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
    `    

    const Image = styled.img`
        object-fit: contain;
        margin: 10px;
        border-radius: 5px;
    `;

    const Count = styled.div`
        color: white;
        padding: 2px;
        font-size: .8rem;
    `;

    const ButtonsGroup = styled.div`
        display: flex;
        flex-direction: row;
        gap: 5px;
        padding: 15px;
        height: 15%;
        align-items: center;
        background-color: rgba(255, 255, 255, .05);
        width: 100%;
    `;

    const Workspace = styled.div`
        display: flex;
        flex-direction: row;
        flex: 1;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    `;

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    `;

const ImageCanvas = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lastImage, setComparedImages] = useState(images.length > 1 ? images[1] : null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
            } else if (event.key === 'ArrowRight') {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [images]);   

    return (
        <Container>
            <Images>
                <Image src={images[currentImageIndex]} />
            </Images>
            
            <Overlay>
                <ButtonsGroup>
                    <Row>
                        <div style={{flexGrow: 1}}>
                            <h3 style={{color: "white"}}>Workspace <Count>{currentImageIndex + 1} / {images.length}</Count></h3>
                        </div>
                        <div style={{flexGrow: 1}}>
                            <button>History</button>
                            <button>Current Images</button>
                            <button>Input Images</button>
                            <button>Favorites</button>
                        </div>
                        <div>
                            <button>Save</button>
                        </div>
                    </Row>
                </ButtonsGroup>
                <Workspace>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            }}
                        >
                            <img
                            src={image}
                            style={{
                                objectFit: 'contain',
                                maxHeight: '50%',
                                maxWidth: '50%',
                                borderRadius: '10px',
                                flexShrink: 0,
                                padding: '0px',
                                margin: '0px',
                            }}
                            />
                        </button>
                        ))}
                    </Workspace>
                
                
            </Overlay>

        </Container>
    );
};

export default ImageCanvas;



