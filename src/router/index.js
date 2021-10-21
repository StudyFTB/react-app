import Login from '@/views/login/index'
import Layout from '@/layout/index.jsx'
import Home from '@/views/home/index.jsx'

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    redirect: {path: '/home'},
    component: Layout,
    children: [
      {
        name: 'Home',
        path: '/home',
        component: Home,
      }
    ]
  },
]

export default routes;