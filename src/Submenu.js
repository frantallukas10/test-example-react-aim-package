import React, { Component } from 'react';
import { target } from 'react-aim';

@target()
class Submenu extends Component {
  render() {
    return (
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
      </ul>
    );
  }
}

export default Submenu