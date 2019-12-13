import React, { Component } from 'react';
import Item from './Item'

class MenuItem extends Component {
  render() {
    return (
        <ul>
          <Item name="item 1"/>
          <Item name="item 2"/>
          <Item name="item 3"/>
          <Item name="item 4"/>
          <Item name="item 5"/>
        </ul>
    );
  }
}

export default MenuItem