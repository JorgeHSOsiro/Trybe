import React, { Component } from 'react';
import Pokemons from './data'
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PokemonList pokemons={Pokemons} />
      </div>
      
    );
  }

}

export default App;
