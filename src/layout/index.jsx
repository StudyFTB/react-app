import './index.scss'
import { Layout as AntdLayout } from 'antd';
import MenuSider from './menuSider';

const { Header, Footer, Sider, Content } = AntdLayout;

export default function Layout(props) {
  return (
    <AntdLayout className="layout-wrap">
      <Sider className="sider-wrap">
        <MenuSider history={props.history} location={props.location}></MenuSider>
      </Sider>
      <AntdLayout className="main-wrap">
        <Header className="header-wrap"></Header>
        <Content className="content-wrap">
          {props.children}
        </Content>
        <Footer className="footer-wrap">Ant Design ©2018 Created by Ant UED</Footer>
      </AntdLayout>
    </AntdLayout>
  )
}