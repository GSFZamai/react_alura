import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = '';
        this.texto = '';
    }

    handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    handleTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    enviaFormulario(event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form 
                className="container_form"
                onSubmit={this.enviaFormulario.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    onChange={this.handleTitulo.bind(this)}
                />
                <textarea 
                    rows="15" 
                    placeholder="Sua nota"
                    onChange={this.handleTexto.bind(this)}
                />
                <button className="container_button">Criar</button>
            </form>
        )
    }
}

export default FormularioCadastro;