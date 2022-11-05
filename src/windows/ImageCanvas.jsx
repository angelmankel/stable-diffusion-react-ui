import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3790dd;
    height: 100%;
`

const InnerContainer = styled.div`
    margin: 10px;
    flex-grow: 1;
    /* background-color: aquamarine; */
    overflow-y: auto;

    display: flex;
    flex-direction: row;
    gap: 5px;

    /* flex-wrap: wrap; */
    justify-content: center;
    
`

const Image = styled.img`
    flex-grow: 1;
    object-fit: contain;
`

function ImageCanvas() {

  return (
    <Container>
        <InnerContainer>
            <Image src="https://council.science/wp-content/uploads/2021/03/jonatan-pie-e2MnKlEFcTg-unsplash-polar-lights-e1614972976649-1024x512.jpg" alt="" />
            <Image src="https://img.itch.zone/aW1hZ2UvNTQzNDMyLzY1MDQwMzAucG5n/original/aRTU1s.png" alt="" />
            {/* <Image src="https://img.itch.zone/aW1hZ2UvNTQzNDMyLzY1MDQwMzAucG5n/original/aRTU1s.png" alt="" />
            <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/454206f9-8a2b-45e7-a526-1bec2fccf3a0/d9xnr9q-0cb19316-ebfb-4580-b6f8-84d82d1acb78.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NDIwNmY5LThhMmItNDVlNy1hNTI2LTFiZWMyZmNjZjNhMFwvZDl4bnI5cS0wY2IxOTMxNi1lYmZiLTQ1ODAtYjZmOC04NGQ4MmQxYWNiNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GFHHqn5qJyzVopHZGfNYeRjnlIQBgV8bghg4wNoPPpI" alt="" /> */}
            {/* <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/454206f9-8a2b-45e7-a526-1bec2fccf3a0/d9xnr9q-0cb19316-ebfb-4580-b6f8-84d82d1acb78.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NDIwNmY5LThhMmItNDVlNy1hNTI2LTFiZWMyZmNjZjNhMFwvZDl4bnI5cS0wY2IxOTMxNi1lYmZiLTQ1ODAtYjZmOC04NGQ4MmQxYWNiNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GFHHqn5qJyzVopHZGfNYeRjnlIQBgV8bghg4wNoPPpI" alt="" />
            <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/454206f9-8a2b-45e7-a526-1bec2fccf3a0/d9xnr9q-0cb19316-ebfb-4580-b6f8-84d82d1acb78.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NDIwNmY5LThhMmItNDVlNy1hNTI2LTFiZWMyZmNjZjNhMFwvZDl4bnI5cS0wY2IxOTMxNi1lYmZiLTQ1ODAtYjZmOC04NGQ4MmQxYWNiNzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GFHHqn5qJyzVopHZGfNYeRjnlIQBgV8bghg4wNoPPpI" alt="" /> */}
        </InnerContainer>
    </Container>
  )
}

export default ImageCanvas