import React from 'react';
import './index.scss';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons';
import { validate_password } from '../../utils/validate';
import { Login, GetLoginSms } from '../../apis/user';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
  }

  onFinish = (values) => {
    Login(values).then(res => {
      console.log(res);
    }).catch(e => {});
  };

  handleCLick = (a) => {
    console.log(a);
    this.props.onSpanClick('register');
  }
  // 点击获取验证码触发
  onCodeClick = () => {
    GetLoginSms().then(res => {

    }).catch(e => {});
  }

  render() {
    return (
      <div>
        <header>
          <span>登录</span>
          <span onClick={this.handleCLick}>账号注册</span>
        </header>
        <Form
          name="normal_login"
          onFinish={this.onFinish}
        >
          <Form.Item name="username" rules={[
            { required: true, message: '邮箱不能为空' },
            { type: 'email', message: '邮箱格式不正确' },
          ]} >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" autoComplete="off" ref={this.ref} />
          </Form.Item>
          <Form.Item name="password" rules={[
            { required: true, message: '密码不能为空' },
            { min: 6, message: '不能少于6位' },
            { max: 20, message: '不能大于20位' },
            { pattern: validate_password, message: '只能输入数字或字母' },
          ]} >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item name="code" rules={[
            { required: true, message: '请输入验证码！' },
            { len: 6, message: '请输入6位验证码' }
          ]} >
            <Row gutter={13}>
                <Col span={15}>
                  <Input
                    prefix={<VerifiedOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="验证码"
                    autoComplete="off"
                  />
                </Col>
                <Col span={9}>
                  <Button danger type="primary" block onClick={this.onCodeClick}>获取验证码</Button>
                </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}