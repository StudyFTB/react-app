import React from 'react';
import './index.scss';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  handleCLick = () => {
    this.props.onSpanClick('login');
  }

  render() {
    return (
      <div>
        <header>
          <span>注册</span>
          <span onClick={this.handleCLick}>账号登录</span>
        </header>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]} >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]} >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item name="password1" rules={[{ required: true, message: '请输入密码！' }]} >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item name="varification" rules={[{ required: true, message: '请输入验证码！' }]} >
            <Row gutter={13}>
                <Col span={15}>
                  <Input
                    prefix={<VerifiedOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="验证码"
                  />
                </Col>
                <Col span={9}>
                  <Button danger type="primary" block>获取验证码</Button>
                </Col>
            </Row>
            
          </Form.Item>
          <Form.Item name="submit">
            <Button type="primary" htmlType="submit" block>注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}