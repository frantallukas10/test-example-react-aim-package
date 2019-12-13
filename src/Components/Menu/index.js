import React, { Component } from 'react';
import Item from '../Item';
import './style.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <Item name="item 1" />
          <Item name="item 2" />
          <Item name="item 3" />
          <Item name="item 4" />
          <Item name="item 5" />
        </ul>
      </div>
    );
  }
}

export default Menu;
