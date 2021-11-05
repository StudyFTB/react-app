import React,{ useState } from 'react'
import './index.scss'
import { Layout as AntdLayout, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import MenuSider from './menuSider';

const { Header, Footer, Sider, Content } = AntdLayout;

export default function Layout(props) {
  const [collapsed, setCollapsed] = useState(false); // 控制侧边栏

  return (
    <AntdLayout className="layout-wrap">
      <Sider className="sider-wrap" collapsible collapsed={collapsed} onCollapse={() => {setCollapsed(!collapsed)}}>
        <div style={{marginBottom: '20px',fontSize: 20,textAlign:'center'}}>logo</div>
        <MenuSider history={props.history} location={props.location}></MenuSider>
      </Sider>
      <AntdLayout className="main-wrap">
        <Header className="header-wrap">
          <Button type="primary" onClick={() => {setCollapsed(!collapsed)}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </Header>
        <Content className="content-wrap">
          {props.children}
        </Content>
        <Footer className="footer-wrap">Ant Design ©2018 Created by Ant UED</Footer>
      </AntdLayout>
    </AntdLayout>
  )
}