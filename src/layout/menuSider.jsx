import { useState } from 'react'
import routes from '@/router/routes';
import { Menu } from 'antd'

import {
  AppstoreOutlined
} from '@ant-design/icons';

const { SubMenu  } = Menu;

function MenuSider({history,location}) {
  // 过滤出要显示的菜单
  const filterMenuRoutes = (arr) => {
    return arr.filter(item => {
      if(item.children && item.children.length > 0) {
        item.children = filterMenuRoutes(item.children)
      }
      return item.isMenu;
    })
  }

  const [menuRoutes] = useState(filterMenuRoutes(routes));

  // 设置菜单
  const setMenuHtml = (arr) => {
    return arr.map(item => {
      if(item.children?.length > 0) {
        return (
          <SubMenu key={item.path} icon={<AppstoreOutlined />} title={item.name}>
            {setMenuHtml(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.path} icon={<AppstoreOutlined />}>
          {item.name}
        </Menu.Item>
      )
    })
  }

  const defaultSelectedKeys = [location.pathname];
  const defaultOpenKeys = () => {
    const pathArr = location.pathname.split('/');
    if(pathArr.length===2) return ['/']
    else return ['/'+pathArr[1]]
  }

  return (
    <Menu theme="dark" defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={defaultOpenKeys()} mode="inline" onClick={({key}) => {history.push(key)}}>
      {setMenuHtml(menuRoutes)}
    </Menu>
  )
}

export default MenuSider;