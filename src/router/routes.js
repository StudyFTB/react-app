import Login from '@/views/login/index'
import Layout from '@/layout/index.jsx'
import Home from '@/views/home/index.jsx'
import ErrorPage from '@/views/error/index.jsx'

const routes = [
  {
    path: '/home',
    component: Layout,
    children: [
      {
        name: 'Home',
        path: '/home',
        component: Home,
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: '404',
    path: '/error',
    component: ErrorPage,
  },
  {
    name: '404',
    path: '*',
    component: ErrorPage,
  },
]

export default routes;