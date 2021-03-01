import { Component } from 'react';
import './App.css';
import Child from './components/MyComponent';

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
    return <section>
      <h1>HEJ</h1>
      <h2>{this.state.counter}</h2>
      <Child handleClick={this.increment} />
    </section>
  }
}
export default App;
