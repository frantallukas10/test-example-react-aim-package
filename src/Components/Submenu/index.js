import React, { Component } from 'react';
import { target } from 'react-aim';
import './style.css';

@target({
  aimStart: (props, component) => {
    component.setState({ aiming: true });
  },
  aimStop: (props, component) => {
    component.setState({ aiming: false });
  }
})
class Submenu extends Component {
  render() {
    return (
      <ul class="submenu">
        <li className="submenu-li">a</li>
        <li className="submenu-li">b</li>
        <li className="submenu-li">c</li>
        <li className="submenu-li">d</li>
        <li className="submenu-li">e</li>
        <li className="submenu-li">f</li>
      </ul>
    );
  }
}

export default Submenu;
