import React, {Component} from 'react';
import Navbar from './compoments/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './compoments/Home'


class App extends Component {
  render () {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/' component={Home} />
      </div>
    </BrowserRouter>

  );
}
}

export default App;
