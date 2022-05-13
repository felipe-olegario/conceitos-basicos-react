import React from 'react';
import If from './If';

export default (props) => {
    return (
        <div>
            <If test={props.usuario.nome}>
                Seja bem vindo <b>{props.usuario.nome}</b>
            </If>
        </div>
    );
}