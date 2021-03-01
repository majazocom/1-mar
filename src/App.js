import { Component } from 'react';
import './App.css';
import Card from './components/Card';
import pokemons from './assets/data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 1
    }
  }
  increment = () => {
    //this.state.counter = this.state.counter + 1;
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    console.log(pokemons);
    return <section>
      <h1>Pokemons</h1>
      <section className="cards-container">
        {
          pokemons.map((pokemon, index) => <Card key={index} name={pokemon.name} />)
        }
      </section>
    </section>
  }
}
export default App;
