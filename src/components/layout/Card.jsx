import React from 'react';
import './card.css';

export default (props) => {
    const style = {
        backgroundColor: props.color || 'red',
        borderColor: props.color || 'red',
    }

    return (
        <div className="card" style={style}>
            <div className="title">{props.titulo}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}