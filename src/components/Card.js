import { Component } from 'react';
import Card from '@material-ui/core/Card';

class PokemonCard extends Component {
    render() {
        let imgUrl = `https://img.pokemondb.net/artwork/${this.props.name}.jpg`;
        console.log(imgUrl);
        return (
            <Card>
                <h1>{this.props.name}</h1>
                <img src={imgUrl} alt={this.props.name} width="150" height="150"></img>
            </Card>
        )
    }
}

export default PokemonCard;