import React, { Component } from 'react';
import { source } from 'react-aim';
import Submenu from './Submenu';

@source({
  mouseEnter: (props, component) => component.setState({ over: true }),
  mouseLeave: (props, component) => component.setState({ over: false })
})

class Item extends Component {
  constructor() {
    super();
    this.state = { over: false };
  }

  render() {
    let submenu;
    if (this.state.over) submenu = <Submenu ref="submenu"/>;

    return (
      <li>
        {this.props.name}
        {submenu}
      </li>
    );
  }
}

export default Item