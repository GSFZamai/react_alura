import React, { Component } from 'react';
import './style.css'

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = {
            categorias: []
        }

        this._novaListaDeCategorias = this._novaListaDeCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novaListaDeCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novaListaDeCategorias);
    }

    _novaListaDeCategorias(categorias) {
        this.setState({...this.state, categorias})
    }

    _handleInputEvent(event) {
        if(event.key === "Enter") {
            let valorCategoria = event.target.value;
            this.props.adicionarCategoria(valorCategoria);
            event.target.value = '';
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, key) => {
                        return <li key={key} className="lista-categorias_item">{categoria}</li>
                    })} 
                </ul>
                <input 
                    type="text"
                    onKeyUp={this._handleInputEvent.bind(this)}
                    className="lista-categorias_input"
                />
            </section>
        )
    }
}

export default ListaDeCategorias