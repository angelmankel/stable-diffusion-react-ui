import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const InnerContainer = styled.div`
    margin: 10px;
    flex-grow: 1;
    overflow-y: auto;

    display: flex;
    flex-direction: row;
    gap: 5px;

    justify-content: center;
    flex-wrap: wrap;
`

const Image = styled.img`
    flex-grow: 1;
    object-fit: contain;
    max-height: 100%;
`
const Canvas = styled.img`
    flex-grow: 1;
    object-fit: contain;
    max-height: 100%;
    
`


function ImageCanvas(props) {

  return (
    <Container>
        <InnerContainer>
            {/* <Image src="https://council.science/wp-content/uploads/2021/03/jonatan-pie-e2MnKlEFcTg-unsplash-polar-lights-e1614972976649-1024x512.jpg" alt="" /> */}
            {/* <Canvas src="https://img.itch.zone/aW1hZ2UvNTQzNDMyLzY1MDQwMzAucG5n/original/aRTU1s.png" alt="" /> */}
            <Image src="https://img.itch.zone/aW1hZ2UvNTQzNDMyLzY1MDQwMzAucG5n/original/aRTU1s.png" alt="" />
            {/* <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ebada33e-a3f1-4480-becf-a8a8eba46dbf/d2w9o9s-50b1edbe-c0f0-43f8-884c-6590deeafbfc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ViYWRhMzNlLWEzZjEtNDQ4MC1iZWNmLWE4YThlYmE0NmRiZlwvZDJ3OW85cy01MGIxZWRiZS1jMGYwLTQzZjgtODg0Yy02NTkwZGVlYWZiZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gdyreYhjAKxufMFDufi33C4qNsL5Amv3mGwLmgjJ4vQ" alt="" /> */}
            
            {/* <Image src="https://img.itch.zone/aW1hZ2UvNTQzNDMyLzY1MDQwMzAucG5n/original/aRTU1s.png" alt="" />
            <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/454206f9-8a2b-45e7-a526-1bec2fccf3a0/d9xnr9q-0cb19316-ebfb-4580-b6f8-84d82d1acb78.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NDIwNmY5LThhMmItNDVlNy1hNTI2LTFiZWMyZmNjZjNhMFwvZDl4bnI5cS0wY2IxOTMxNi1lYmZiLTQ1ODAtYjZmOC04NGQ4MmQxYWNiNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GFHHqn5qJyzVopHZGfNYeRjnlIQBgV8bghg4wNoPPpI" alt="" />
            <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/454206f9-8a2b-45e7-a526-1bec2fccf3a0/d9xnr9q-0cb19316-ebfb-4580-b6f8-84d82d1acb78.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NDIwNmY5LThhMmItNDVlNy1hNTI2LTFiZWMyZmNjZjNhMFwvZDl4bnI5cS0wY2IxOTMxNi1lYmZiLTQ1ODAtYjZmOC04NGQ4MmQxYWNiNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GFHHqn5qJyzVopHZGfNYeRjnlIQBgV8bghg4wNoPPpI" alt="" />
            <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/454206f9-8a2b-45e7-a526-1bec2fccf3a0/d9xnr9q-0cb19316-ebfb-4580-b6f8-84d82d1acb78.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NDIwNmY5LThhMmItNDVlNy1hNTI2LTFiZWMyZmNjZjNhMFwvZDl4bnI5cS0wY2IxOTMxNi1lYmZiLTQ1ODAtYjZmOC04NGQ4MmQxYWNiNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GFHHqn5qJyzVopHZGfNYeRjnlIQBgV8bghg4wNoPPpI" alt="" /> */}
        </InnerContainer>
    </Container>
  )
}

export default ImageCanvas