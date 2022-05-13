import React from 'react';

export default class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial,
        qtdSoma: 1,
    }

    somar = () => {
        this.setState({
            numero: this.state.numero + this.state.qtdSoma,
        })
    }

    subtrair = () => {
        this.setState({
            numero: this.state.numero - this.state.qtdSoma,
        })
    }

    alterarQtdSoma = (e) => {
        this.setState({
            qtdSoma: +e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h3>Contador</h3>
                <p>{this.state.numero}</p>
                <div>
                    <label>Valor somado:</label>
                    <input type="number" value={this.state.qtdSoma} onChange={this.alterarQtdSoma}/>
                </div>
                <button onClick={this.somar}>+</button>
                <button onClick={this.subtrair}>-</button>
            </div>
        )
    }
}