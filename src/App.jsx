import React from 'react';
import Random from './concepts/Random';
import Card from './components/layout/Card';
import Familia from './concepts/Familia';
import Membro from './concepts/Membro';
import ListaDeAlunos from './concepts/ListaDeAlunos';
import TabelaProdutos from './concepts/TabelaProdutos';
import Usuario from './condicional/Usuario';
import DiretaPai from './comunicacao/DiretaPai';
import IndiretaPai from './comunicacao/IndiretaPai';
import Input from './formulario/Input';
import Button from './components/layout/Button';
import Formulario from './formulario/Formulario';
import Contador from './components/contador/Contador';

export default () => {
    return (
        <div>
            <h1>Fundamentos React</h1>
            <div className="flex-layout-cards">
                <Card titulo="Conceito Random" color="blue">
                    <Random min={10} max={20} />
                </Card>

                <Card titulo="Conceito familia" color="blue">
                    <Familia sobrenome="Olegario">
                        <Membro name="Jorge" />
                        <Membro name="Pedro" />
                        <Membro name="Natalia" />
                    </Familia>
                </Card>

                <Card titulo="Conceito Repetição" color="orange">
                    <ListaDeAlunos/>
                </Card>

                <Card titulo="Desafio Repetição" color="purple">
                    <TabelaProdutos/>
                </Card>

                <Card titulo="Conceito Condicional" color="purple">
                    <Usuario usuario={{nome: 'Felipe'}}/>
                </Card>

                <Card titulo="Conceito Comunicação Direta" color="pink">
                    <DiretaPai/>
                </Card>

                <Card titulo="Conceito Comunicação Indireta" color="pink">
                    <IndiretaPai/>
                </Card>

                <Card titulo="Conceito input" color="orangeRed">
                    <Input enviardados/>
                </Card>

                <Card titulo="Conceito Formulario" color="orangeRed">
                    <Formulario/>
                </Card>

                <Card titulo="Conceito Contador" color="gray">
                    <Contador numeroInicial={10}/>
                </Card>

                <Card titulo="Conceito styled components" color="gray">
                    <Button text="teste"/>
                </Card>

                <Card titulo="Vantagens do styled components" color="gray">
                    <h4>Server side render</h4>
                    <h4>Reutilização</h4>
                    <h4>CSS puro ou SCSS</h4>
                    <h4>Estilo dinâmico evitando estilos duplicados</h4>
                    <h4>Suporte a temas pronto para uso utilizando o themeProvider</h4>
                    <h4>Melhor desempenho</h4>
                </Card>

                <Card titulo="Desvantagens do styled components" color="gray">
                    <h4>Abordagem incomum</h4>
                    <h4>Poluindo o React DOM</h4>
                </Card>
            </div>
        </div>
    )
}