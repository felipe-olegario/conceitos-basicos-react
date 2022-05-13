import React from 'react';
import alunos from '../data/alunos';

export default (props) => {
    return (
        <div>
            <ul>
                {alunos.map((item) => {
                    return <li><h3>{item.id}) {item.nome} = {item.nota}</h3></li>;
                })}
            </ul>
        </div>
    )
}