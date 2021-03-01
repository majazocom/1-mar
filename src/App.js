import { Component } from 'react';
import './App.css';
import PokemonCard from './components/Card';
import Backpack from './components/Backpack';
import pokemons from './assets/data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 1,
      collection: []
    }
  }
  increment = () => {
    //this.state.counter = this.state.counter + 1;
    this.setState({ counter: this.state.counter + 1 })
  }

  catchPokemon = (e) => {
    //update state
    //add selected pokemon to pokemon collection
    let result = pokemons.find(pokemon => pokemon.name === e.target.alt);
    console.log(result);
    this.setState({
      collection: this.state.collection.concat([result])
    })
  }

  render() {
    return <section>
      <h1>Pokemons</h1>
      <Backpack pokemons={this.state.collection} />
      <section className="cards-container">
        {
          pokemons.map((pokemon, index) => <PokemonCard key={index} catchPokemon={this.catchPokemon} name={pokemon.name} />)
        }
      </section>
    </section>
  }
}
export default App;
