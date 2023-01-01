import React, {useState} from 'react'
import styled from 'styled-components'
import Select from 'react-select';
import '../css/CustomDropdown.css';

const Container = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const options = [
    { value: 'Euler a', label: 'Euler a' },
    { value: 'Euler', label: 'Euler' },
    { value: 'LMS', label: 'LMS' },
    { value: 'Heun', label: 'Heun' },
    { value: 'DPM2', label: 'DPM2' },
    { value: 'DPM2 a', label: 'DPM2 a' },
    { value: 'DPM fast', label: 'DPM fast' },
    { value: 'DPM adaptive', label: 'DPM adaptive' },
    { value: 'LMS Karras', label: 'LMS Karras' },
    { value: 'DPM2 a Karras', label: 'DPM2 a Karras' },
    { value: 'DDIM', label: 'DDIM' },
    { value: 'PLMS', label: 'PLMS' }
];

function Dropdown(props) {
    
    const [selectedOption, setSelectedOption] = useState(options[options.findIndex(option => option.value === props.settings.sampler)]);

    return (
    <Container>
        <label className='label'>Sampler</label>
        <Select
            className='custom-select-container'
            classNamePrefix={'custom-select'}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            // menuIsOpen={true}
        />
    </Container>
    )
}

export default Dropdown
