import React, { Component } from 'react';
import HelloWorld from './HelloWorld.jsx';

class App extends Component {
  // the state object has been removed.

  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
