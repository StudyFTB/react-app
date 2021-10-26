import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import routes from '@/router/routes.js'

export default function BaseRouter(props) {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(item => {
            if(item.children && item.children.length>0) {
              return <Route path={item.path} key={item.path} render={(props) => 
                <item.component {...props}>
                  <Switch>
                    <Redirect exact from={item.path} to={item.children[0].path} />
                    {
                      item.children?.map(child => {
                        return <Route exact component={child.component} path={child.path} key={child.path} />
                      })
                    }
                  </Switch>
                </item.component>
              }/>
            }else {
              return <Route component={item.component} exact path={item.path} key={item.path}/>
            }
          })
        }
      </Switch>
    </BrowserRouter>
  )
}