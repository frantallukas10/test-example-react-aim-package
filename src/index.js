import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Menu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Menu />, document.getElementById('root'));

// If you want your Menu to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
