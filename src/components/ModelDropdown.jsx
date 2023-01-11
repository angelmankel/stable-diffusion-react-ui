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

function ModelDropdown(props) {
    
    const [models, setModels] = useState(null)

    useEffect(() => {
        GetOptions.then(options => {
            setModels(options)
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
        
        fetch("/sdapi/v1/sd-models", requestOptions)
        .then(response => response.json())
        .then(result => {
            let options = []
            for (let i = 0; i < result.length; i++) {
                let name = result[i].filename.split("\\")
                options.push({ value: `${result[i].title}`, label: `${name[name.length - 1]}` })
            }

            return options
        })
        .then((options) => resolve(options))
        
    });

    return (
    <Container>
        <label className='label'>Model</label>
        <Select
            className='custom-select-container'
            classNamePrefix={'custom-select'}
            onChange={(e) => props.setOptions(e.value)} 
            options={models}
            value={models ? models[models.findIndex(option => option.value === props.value)] : null}
            // menuIsOpen={true} // for debugging
        />
    </Container>
    )
}

export default ModelDropdown
