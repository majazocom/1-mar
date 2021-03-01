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
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    console.log(pokemons);
    return <section>
      <h1>HEJ</h1>
      <h2>{this.state.counter}</h2>
      {
        pokemons.map((pokemon, index) => <Card key={index} name={pokemon.name} />)
      }
      <Card handleClick={this.increment} />
    </section>
  }
}
export default App;
