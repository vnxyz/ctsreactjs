import React, { Component } from 'react';
import Button from './Button'
import ListItem from './ListItem'

class Dropdown extends Component {

    constructor(){
      super();
      this.state = {buttonCaption: 'Select the Courses!!', show:false, courses: ['ReactJS', 'AngularJs', 'NodeJS']}
    }

    toggleShow(){
      var newState = !this.state.show
      console.log('Show: ', newState)
      this.setState({show: newState})
    }
    handleItemClick(item){
      console.log('In parent component', item);
      this.setState({buttonCaption: item, show: false});
    }
    
    render() {

        var list = this.state.courses.map(function(course, i){
          return <ListItem whenItemClicked={this.handleItemClick.bind(this)} item={course} key={i}></ListItem>
        }.bind(this))
        console.log(list)
        return (
            <div class="dropdown">
            <Button whenClick={this.toggleShow.bind(this)} caption={this.state.buttonCaption}/>
            <ul class={this.state.show?'dropdown-menu show':'dropdown-menu'} aria-labelledby="dropdownMenu1">
                {list}
            </ul>
          </div>
        );
    }
}

export default Dropdown;