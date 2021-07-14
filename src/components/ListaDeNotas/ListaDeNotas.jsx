import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';
import "./style.css"

class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = {
            notas: []
        }

        this._novaListaDeNotas = this._novaListaDeNotas.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novaListaDeNotas);
    }
    componentWillUnmount() {
        this.props.notas.desinscrever(this._novaListaDeNotas)
    }

    _novaListaDeNotas(notas) {
        this.setState({...this.state, notas})
    }

    render() {
        return (
            <ul className="lista-notas">
                {
                    this.state.notas.map((notas, key) => {
                        return (
                            <li 
                                className="lista-notas_item" 
                                key={key}
                            >
                                <CardNota
                                    indice={key} 
                                    texto={notas.texto} 
                                    titulo={notas.titulo}
                                    deletarNota={this.props.deletarNota}
                                    categoria={notas.categoria}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ListaDeNotas;