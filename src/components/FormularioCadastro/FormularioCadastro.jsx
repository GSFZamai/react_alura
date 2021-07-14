import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = '';
        this.texto = '';
        this.categoria = 'Sem Categoria';
        this.state = {
            categorias: []
        }
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novaListaDeCategorias.bind(this));
    }

    _novaListaDeCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    handleTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    handleCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
        console.log(this.categoria)
    }

    enviaFormulario(event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.criarNota(this.categoria, this.titulo, this.texto);
    }

    render() {
        return (
            <form 
                className="form-cadastro"
                onSubmit={this.enviaFormulario.bind(this)}
            >
                <select onChange={this.handleCategoria.bind(this)} className="form-cadastro_input">
                    <option defaultValue disabled>Escolha uma categoria</option>
                    {
                        this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    onChange={this.handleTitulo.bind(this)}
                    className="form-cadastro_input"
                />
                <textarea 
                    rows="15" 
                    placeholder="Sua nota"
                    onChange={this.handleTexto.bind(this)}
                    className="form-cadastro_input"
                />
                <button 
                    className="form-cadastro_submit form-cadastro_input"
                >
                    Criar
                </button>
            </form>
        )
    }
}

export default FormularioCadastro;