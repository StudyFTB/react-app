import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import routes from '@/router/index.js'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            routes.map(item => {
              if(item.redirect) {
                return (
                  <React.Fragment key={item.path}>
                    <Route exact path={item.path} key={item.path} render={ () =>
                      <Redirect to={item.redirect.path} />
                    } />
                    <Route exact path={item.redirect.path} key={item.component.name} render={ (props) =>
                      <item.component {...props} routes={item.children}></item.component>
                    } />
                  </React.Fragment>
                )
              }else {
                return (<Route exact path={item.path} key={item.path} render={ (props) =>
                  <item.component {...props} routes={item.children}></item.component>
                } />)
              }
            })
          }
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
