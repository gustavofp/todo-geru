import React, { Component } from 'react';
import Header from '../components/Header';
import List from './List';
import Filter from './Filter';
import { ToastContainer } from 'react-toastify-redux';
import 'react-toastify/dist/ReactToastify.css';
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';

class App extends Component {

  componentDidMount() {
    loadProgressBar({ parent: '#content' });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <Filter />
          <List />
          <ToastContainer autoClose={2000} />
        </div>
      </div>
    );
  }
}

export default App;
