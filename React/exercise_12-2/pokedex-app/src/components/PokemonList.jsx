import React, { Component } from 'react';
import PokemonCell from './PokemonCell';

class PokemonList extends Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokemon-list">
                {pokemons.map((pkm) => <PokemonCell key={pkm.id} pokemon={pkm} />)}
            </div>
        )
    }
}

export default PokemonList