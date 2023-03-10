import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Job from './Job'
import SSE from './SSE'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
`

const JobsCount = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: white;
    text-shadow: 1px 1px 5px black;
    background-color: #b1b1b15f;
    flex-basis: 0;
    height: 6%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

function JobsQueue({ jobs, setJobs }) {
 
    const [complete, setComplete] = useState(0)
    const [queued, setQueued] = useState(0)
    const [autoRemoveCompletedJobs, setAutoRemoveCompletedJobs] = useState(false)

    useEffect(() => {
        // Update the number of completed jobs
        setComplete(() => {
            let completed = 0
            jobs.forEach((job) => {
                if (job.result)
                {
                    completed++
                }
            })
            return completed
        })
    }, [jobs])

    useEffect(() => {
        // Update the number of queued jobs
        setQueued(() => {
            let queued = 0
            jobs.forEach((job) => {
                if (!job.result)
                {
                    queued++
                }
            })
            return queued
        })
    }, [jobs])

    return (
        <>
        <JobsCount>
            <div>Completed: {complete}</div>
            <div>Queued: {queued}</div>
        </JobsCount>
        <Container>
            { jobs.map((job) => {
                if (!job.result)
                {
                    return <Job key={job.job_id} job={job} setJobs={setJobs}/>
                }
                else
                {
                    if (autoRemoveCompletedJobs) {
                        return null
                    }

                    return <Job key={job.job_id} job={job} setJobs={setJobs}/>
                }
            })
            }
        </Container>
        </>
    )
}

export default JobsQueue