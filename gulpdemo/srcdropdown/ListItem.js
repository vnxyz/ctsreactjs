import React, { Component } from 'react';

class ListItem extends Component {

    handleItemClick(){
        console.log('Item is getting cliccked', this.props.item);
        this.props.whenItemClicked(this.props.item)
    }
    render() {
        return (
            <li onClick={this.handleItemClick.bind(this)} class="list-group-item">{this.props.item}</li>
        );
    }
}

export default ListItem;