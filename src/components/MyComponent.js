import { Component } from 'react';

class Child extends Component {
    render() {
        return(
            <button onClick={this.props.handleClick}>+</button>
        )
    }
}

export default Child;