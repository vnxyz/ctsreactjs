import React, { Component } from 'react';
class Button extends Component {

    render() {
        return (
            <button onClick={this.props.whenClick} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                {this.props.caption}
                <span class="caret"></span>
           </button>
        );
    }
}

export default Button;