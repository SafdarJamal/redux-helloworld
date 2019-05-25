import React, { Component } from 'react';
import HelloWorld from './HelloWorld.jsx';

class App extends Component {
  state = {
    tech: 'React'
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ tech: 'Redux' });
      console.log('State updated');
    }, 3000);

    console.log('Mounted');
  }

  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
