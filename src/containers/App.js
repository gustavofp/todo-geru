import React, { Component } from 'react';
import Header from '../components/Header';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
