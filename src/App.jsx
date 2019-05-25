import React, { Component } from 'react';
import HelloWorld from './HelloWorld.jsx';

import { createStore } from 'redux';
const store = createStore();

class App extends Component {
  // the state object has been removed.

  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
