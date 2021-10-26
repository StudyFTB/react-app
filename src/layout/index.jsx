import './index.scss'
import { Layout as AntdLayout } from 'antd';

const { Header, Footer, Sider, Content } = AntdLayout;

export default function Layout(props) {
  console.log(props)
  return (
    <AntdLayout className="layout-wrap">
      <Sider className="sider-wrap"></Sider>
      <AntdLayout>
        <Header></Header>
        <Content className="content-wrap">
          {props.children}
        </Content>
        <Footer className="footer-wrap">Ant Design ©2018 Created by Ant UED</Footer>
      </AntdLayout>
    </AntdLayout>
  )
}