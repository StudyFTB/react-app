import Login from '@/views/login/index'
import Layout from '@/layout/index.jsx'
import Home from '@/views/home/index.jsx'
import User from '@/views/user/index.jsx'
import ErrorPage from '@/views/error/index.jsx'

const routes = [
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
  // 嵌入式根路由必须放在后面
  {
    name: '',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Home',
        path: '/home',
        component: Home,
      },
      {
        name: 'User',
        path: '/user',
        component: User,
      },
    ]
  },
  {
    name: '404',
    path: '*',
    component: ErrorPage,
  },
]

export default routes;