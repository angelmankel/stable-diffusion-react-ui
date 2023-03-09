import React from 'react'
import styled from 'styled-components'
import Job from './Job'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
`

function JobsQueue({ jobs }) {

    return (
        <Container>
            {jobs.map((job, index) => (
                <Job key={index} job={JSON.parse(job)} />
            ))}
        </Container>
    )
}

export default JobsQueue