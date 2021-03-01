import { Component } from 'react';

class Card extends Component {
    render() {
        return(
            <button onClick={this.props.handleClick}>+</button>
        )
    }
}

export default Card;