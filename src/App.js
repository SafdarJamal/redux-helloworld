import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import { store } from './store/index';

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
