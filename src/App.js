import React, {Component} from 'react';
import Navbar from './compoments/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './compoments/Home'
import About from './compoments/About'
import Contact from './compoments/Contact'


class App extends Component {
  render () {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>

  );
}
}

export default App;
