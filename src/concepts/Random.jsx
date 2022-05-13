import React from 'react';


export default (props) => {
    const random = parseInt(Math.random() * (props.min * props.max)) + props.min;
    return (
        <div>
            <h2>Minimo = {props.min}</h2>
            <h2>Maximo = {props.max}</h2>
            <h2>
                Numero aleatório = {random};
            </h2>
        </div>
    )
}