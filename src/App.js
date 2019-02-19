import React, { Component } from 'react';
import './App.css';
import MovieBlog from './containers/MovieBlog/MovieBlog.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MovieBlog/>
      </div>
    );
  }
}

export default App;
