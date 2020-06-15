import React, { Component } from 'react';

class PokemonCell extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        
        return (
            <div className="pokemon-cell">
                <div className="pokemon-info">
                <p className="pokemon-name">{ name }</p>
                <p className="pokemon-type">{ type }</p>
                <p className="pokemon-weight">{ averageWeight.value }{ averageWeight.measurementUnit }</p>
                </div>
                <div className="pokemon-image">
                <img className="pokemon-pic" src={ image } alt="imagem do pokemon" />
                </div>

            </div>
        )
    }
} 
export default PokemonCell;