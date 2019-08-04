import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { store } from './store';

const render = () => {
  // console.log('Rendering');
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
