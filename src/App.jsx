import React, { Component } from 'react';
import HelloWorld from './HelloWorld.jsx';

class App extends Component {
  state = {
    tech: 'React'
  };

  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
