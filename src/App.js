import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './views/login/index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} exact path='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
