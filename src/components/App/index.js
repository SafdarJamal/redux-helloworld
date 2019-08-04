import React, { Component } from 'react';
import { store } from '../../store';

import HelloWorld from '../HelloWorld';
import ButtonGroup from '../ButtonGroup';

class App extends Component {
  render() {
    // console.log(store.getState());

    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={['React', 'Redux', 'React-Redux']} />
    ];
  }
}

export default App;
