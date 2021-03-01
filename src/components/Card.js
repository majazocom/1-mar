import { Component } from 'react';

class Card extends Component {
    render() {
        let imgUrl = `https://img.pokemondb.net/artwork/${this.props.name}.jpg`;
        console.log(imgUrl);
        return (
            <section className="card-container">
                <h1>{this.props.name}</h1>
                <img src={imgUrl} alt={this.props.name} width="150" height="150"></img>
            </section>
        )
    }
}

export default Card;