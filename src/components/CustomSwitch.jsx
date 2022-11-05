import React, {useState} from 'react'
import Switch from "react-switch";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

function CustomSwitch(props) {
    const [checked, setChecked] = useState(false);

    function handleChange(checked) {
        setChecked(checked)
    }

    return (
        <Container>
            <label className='label'>{props.children}</label>
            <Switch 
                onChange={handleChange} 
                checked={checked}
                onColor="#3b3245"
                onHandleColor="#ffffff"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
            />
        </Container>
    )
}

export default CustomSwitch
