import {React, useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [aposentado, setAposentado] = useState('');

    function receberInformações(nome, idade, aposentado) {
        setNome(nome);
        setIdade(idade);
        setAposentado(aposentado);
    }
    return (
        <>
            <div>
                <h3>{nome}</h3>
                <h3>{idade}</h3>
                <h3>{aposentado ? 'Aposentado' : 'Trabalhador'}</h3>
            </div>
            <IndiretaFilho quandoClicar={receberInformações}/>
        </>
    )
}