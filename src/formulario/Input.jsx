import {React, useState} from 'react';

export default props => {
    const [value, setValue] = useState('');

    function setValueInput(e) {
        setValue(e.target.value);
        console.log(props);
        props.enviarDados(value);
    }

    return (
        <>
            <input className="input" value={value} onChange={setValueInput} placeholder={props.placeholder}/>
        </>
    )
}
