import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

function HandleClick(job) {
    console.log(job)
}

function Job({ job }) {
    
    const [img, setImg] = useState("https://www.researchgate.net/profile/R-Bastiaans/publication/242667254/figure/fig1/AS:298479747387394@1448174525356/Test-image-of-512x512-pixels-containing-1024-particles.png");
    const [progress, setProgress] = useState(null);

    // set up interval to get job progress from /progress endpoint
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         axios.get(`/progress`)
    //         .then(res => {
    //             // console.log(res.data)
    //             let keys = Object.keys(res.data)

    //             for (let i = 0; i < keys.length; i++) {
    //                 // console.log(res.data[keys[i]].current_image)
    //                 if (keys[i] === job.job_id) {
    //                     setImg(`data:image/png;base64,${res.data[keys[i]].current_image}`)
    //                     setProgress(res.data[keys[i]].progress)
    //                 }

    //                 // res.data[keys[i]].state.id = job.job_id
    //                 // console.log(res.data[keys[i]])
    //                 // setImg(`data:image/png;base64,${res.data[keys[i]].current_image}`)
    //             }

    //         })
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
    const interval = setInterval(() => {
        axios.get(`/progress`)
        .then(res => {
        let progressData = res.data[job.job_id];
        if (progressData) {
            setImg(`data:image/png;base64,${progressData.current_image}`)
            setProgress(progressData.progress)
        }
        })
    }, 1000);
    return () => clearInterval(interval);
    }, [job.job_id]);

    
    return (
        <JobContainer onClick={() => HandleClick(job)}>
            <Row>
                <InfoText>Seed: {job.seed}</InfoText>
                <InfoText>Sampler: {job.sampler_index}</InfoText> 
                <InfoText>Progress: {progress}</InfoText>
            </Row>
            {/* "https://picsum.photos/512" */}
            <Thumbnail src={img} /> 
            <Row>
                <InfoText>{job.job_id}</InfoText>
            </Row>
        </JobContainer>
    )

}

const JobContainer = styled.div`
    background-color: #9f6bda5c;
    backdrop-filter: blur(10px);
    color: white;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;

    cursor: pointer;
    transition: background-color 0.20s ease;
    &:hover {
        background-color: #9f6bdafd;
    }

    user-select: none;
`
const InfoText = styled.div`
    font-size: 0.8rem;
    padding: 2px;
`

const Thumbnail = styled.img`
    max-width: 75%;
    max-height: 75%;
    object-fit: contain;
    margin: 10px;
    border-radius: 5px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`
export default Job


// current_image
// : 
// "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAA
// eta_relative
// : 
// 0.8081073938589327
// progress
// : 
// 0.9761016949152542
// state
// : 
// {skipped: false, interrupted: false, job: '', job_count: 1, job_timestamp: '20230307164158', …}
// textinfo
// : 
// null