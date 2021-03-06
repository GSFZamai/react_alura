import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import { ArrayDeNotas } from "./dados/Notas";
import { Categorias } from "./dados/Categorias";

class App extends Component {
  constructor() {
    super();
    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} 
        />
        <main className="conteudo-principal"> 
          <ListaDeCategorias 
            categorias={this.categorias} 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas 
            notas={this.notas}
            deletarNota={this.notas.deletarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
