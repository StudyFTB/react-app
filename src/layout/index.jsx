import { Switch, Route, BrowserRouter } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div style={{color: 'red'}}>
      <aside>
        左边
      </aside>
      <article>
        <BrowserRouter>
          <Switch>
            {
              props.routes.map(item => {
                return (
                  <Route component={item.component} exact path={item.path} key={item.path} />
                )
              })
            }
          </Switch>
        </BrowserRouter>
      </article>
    </div>
  )
}