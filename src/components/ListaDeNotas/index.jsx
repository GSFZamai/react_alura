import React, { Component } from 'react';
import CardNota from '../CardNota';
import "./style.css"

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="container">
                {
                    this.props.notas.map((notas, key) => {
                        return (
                            <li key={key}>
                                <CardNota texto={notas.texto} titulo={notas.titulo}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ListaDeNotas;