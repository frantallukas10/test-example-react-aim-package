import React, { Component } from 'react';
import { source } from 'react-aim';
import Submenu from '../Submenu';
import './style.css';

@source({
  mouseEnter: (props, component) => {
    component.setState({ over: true });
  },
  mouseLeave: (props, component) => {
    component.setState({ over: false });
  }
})
class Item extends Component {
  constructor() {
    super();
    this.state = { over: false };
  }

  render() {
    const componentStyle = {};
    let submenu;
    if (this.state.over) {
      componentStyle.border = '1px solid red';
      submenu = <Submenu ref="submenu" />;
    }

    return (
      <>
        <li style={componentStyle}>{this.props.name}</li>
        {submenu}
      </>
    );
  }
}

export default Item;
