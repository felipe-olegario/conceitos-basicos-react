import {React, useState} from 'react';
import Input from '../formulario/Input';
import '../index.css';

export default props => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    function setValueLogin(value) {
        setLogin(value);
    }

    function setValueSenha(value) {
        setSenha(value);
    }
    return (
        <>
            <Input placeholder="Login" enviarDados={setValueLogin}/>
            <Input placeholder="Senha" enviarDados={setValueSenha}/>
            <div>
                <h3>{login}</h3>
                <h3>{senha}</h3>
            </div>
        </>
    )

}
