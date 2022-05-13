import {React, useState} from 'react';

export default props => {
    const gerarIdade = parseInt(Math.random() * 20) + 50;
    return (
        <>
            <button className="button" onClick={() => {props.quandoClicar('Jorge', gerarIdade, true)}}>Enviar Informações do pai</button>
        </>
    )
}
