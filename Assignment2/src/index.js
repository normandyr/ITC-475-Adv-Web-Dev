import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Iconreact from './Iconreact';
import Timereact from './Timereact';




ReactDOM.render(<App />, document.getElementById('greet'));
ReactDOM.render(<Iconreact />, document.getElementById('pic'));
ReactDOM.render(<Timereact />, document.getElementById('clock'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
