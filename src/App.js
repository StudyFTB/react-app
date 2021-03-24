import './App.scss';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={About} path='/about' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
