import { Component } from "react";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      todos: [
        { "title": "Clean" },
        { "title": "Code" },
        { "title": "Eat" }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(todo) {
    this.setState({
      todos: this.state.todos.concat([todo])
    })
  }

  addTodo(e) {
    let newTodo = {
      "title": e.target[0].value
    };
    this.handleChange(newTodo);
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <h1>TODO LIST</h1>
        <TodoInput addTodo={this.addTodo} />
        {
          this.state.todos.map((todo, index) => <Todo key={index} todo={todo.title} />)
        }
      </section>
    );
  }
}

export default App;