import React from 'react';

export default props => {
    return (
        <>
        <h3>{props.text}</h3>
        <h3>{props.number}</h3>
        <h3>{props.boolean ? 'Verdadeiro' : 'Falso'}</h3>
        </>
    )
}