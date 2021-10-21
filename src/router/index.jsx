import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import routes from '@/router/routes.js'

export default function BaseRouter(props) {
  const RouteEnter = (route) => {
    document.title = route.name || '随便的标题'
  }

  return (
    <BrowserRouter>
      <Switch>
        {/* // 重定向路由 */}
        <Route exact path='/' key='/' render={ () =>
          <Redirect to='/home' />
        } />

        {/* // 动态生成路由 */}
        {
          routes.map(item => {
            return (
              <Route exact path={item.path} key={item.path} onEnter={RouteEnter(item)} render={ (props) =>
                <item.component {...props}>
                  {
                    item.children?.map(child => {
                      return (
                        <Route exact component={child.component} path={child.path} key={child.path} onEnter={RouteEnter(child)} />
                      )
                    })
                  }
                </item.component>
              } />
            )
          })
        }
      </Switch>
    </BrowserRouter>
  )
}