import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { faCircleRadiation } from '@fortawesome/free-solid-svg-icons';
import CustomProgressBar from './CustomProgressBar';

function HandleClick(job) {
    console.log(job)
}

function Job({ job, setJobs }) {
    
    const JobContainer = styled.div`
        color: white;  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 10px;
        flex-grow: 1;
        gap: 5px;

        cursor: pointer;
        transition: background-color 0.20s ease;
        &:hover {
            background-color: #c4c4c494;
        }

        user-select: none;
        background-color: rgba(144, 144, 144, 0.431);
    `;

    const [img, setImg] = useState(null);
    const [currentProgress, setCurrentProgress] = useState({ progress: 0 });
    const [jobID, setJobID] = useState(job.job_id);
    const [livePreview, setLivePreview] = useState(true);

    useEffect(() => {
        const socket = io("http://localhost:5000");
        let jobCompleted = false;

        if (livePreview) {
            socket.on("jobProgress", (data) => {               
                if (!jobCompleted && jobID === data.job_id) {
                    let pg = JSON.parse(data.progress);
                    console.log(pg)
                    setCurrentProgress(pg);
                    setImg(`data:image/png;base64,${pg.current_image}`);
                }
            });
        }
        
        socket.on("jobResult", (data) => {
            if (jobID === JSON.parse(data).job_id) {
                let imgs = JSON.parse(data).images;
                setImg(imgs[0]);
                setCurrentProgress({ progress: 1});
                setJobs((prevJobs) => {
                    return prevJobs.map((job) => {
                        if (job.job_id === jobID) {
                            job.result = imgs[0];
                        }
                        return job;
                    })
                })
                jobCompleted = true;
                socket.off('jobProgress')
            }
        });
        
        socket.on("disconnect", () => setCurrentProgress("server disconnected"));

        return () => {
            socket.off('jobProgress');
        }
    }, []);
        
    return (
        <JobContainer img={img}>
            <RecallButtons>
                <Pill tooltip={job.seed}>Seed</Pill>
                <Pill tooltip={job.sampler_index}>Sampler</Pill>
                <Pill tooltip={job.job_id}>Job ID</Pill>
                <Pill tooltip={job.height}>Height</Pill>
                <Pill tooltip={job.width}>Width</Pill>
                <Pill tooltip={job.prompt}>Prompt</Pill>
                <Pill tooltip={job.negative_prompt}>Negative Prompt</Pill>
            </RecallButtons>
            <Row>
                {img ? <Thumbnail src={img} /> : <div>Queued...</div> }
            </Row>
            <CustomProgressBar progress={currentProgress.progress * 100} />
        </JobContainer>
    )
    

}

const RecallButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const Pill = styled.div`
  display: inline-block;
  background-color: #28191966;
  color: #fff;
  border-radius: 50px;
  padding: 0.25em 0.5em;
  font-size: 0.8em;  
  position: relative;
  cursor: pointer;
  &:hover::after {
    content: "${(props) => props.tooltip}";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5em;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    font-size: 1.2em;
    border-radius: 4px;
    white-space: nowrap;
  }
`;




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
    justify-content: center;
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