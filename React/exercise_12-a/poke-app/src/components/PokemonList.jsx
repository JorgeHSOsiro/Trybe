import React, { Component } from 'react';
import PokemonCell from './PokemonCell';
import pokemons from '../data';

class PokemonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indice: 0,
        }
    }

    setPokemon = (index) => {
        this.setState({
            indice: this.state.indice === pokemons.length +1 ? this.state.indice : this.state.indice + 1 
        })
    }

    render() {
        const { pokemons } = this.props;
        console.log(this.state.indice)
        return (
            <div className="pokemon-list">
                 <PokemonCell key={pokemons.id} pokemon={pokemons[this.state.indice]} />
                 <button onClick={this.setPokemon}>Next</button>
            </div>
        )
    }
}

export default PokemonList