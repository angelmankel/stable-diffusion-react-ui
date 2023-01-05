import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Select from 'react-select';
import '../css/CustomDropdown.css';

const Container = styled.label`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`

function SamplerDropdown(props) {
    
    const [samplers, setSamplers] = useState(null)

    useEffect(() => {
        GetOptions.then(options => {
            setSamplers(options)
        })
    }, [])

    const GetOptions = new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        }
        
        fetch("/sdapi/v1/samplers", requestOptions)
        .then(response => response.json())
        .then(result => {
            let options = []
            for (let i = 0; i < result.length; i++) {
                options.push({ value: `${result[i].name}`, label: `${result[i].name}` })
            }

            return options
        })
        .then((options) => resolve(options))
        
    });

    return (
    <Container>
        <label className='label'>Sampler</label>
        <Select
            className='custom-select-container'
            classNamePrefix={'custom-select'}
            onChange={(e) => props.setSettings(e.value)} 
            options={samplers}
            value={samplers ? samplers[samplers.findIndex(option => option.value === props.value)] : null}
            // menuIsOpen={true} // for debugging
        />
    </Container>
    )
}

export default SamplerDropdown
