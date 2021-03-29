import React from 'react';
import './index.scss';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons';
import { validate_password } from '../../utils/validate';
import { Register, GetRegisterSms } from '../../apis/user';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    Register(values).then(res => {
      console.log(res);
    }).catch(e => {});
  };

  handleCLick = () => {
    this.props.onSpanClick('login');
  }

  // 点击获取验证码触发
  onCodeClick = () => {
    GetRegisterSms().then(res => {

    }).catch(e => {});
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
          onFinish={this.onFinish}
        >
          <Form.Item name="username" rules={[
            { type: 'email', message: '邮箱格式不正确' },
            { required: true, message: '请输入用户名' }
          ]} >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" autoComplete="off" />
          </Form.Item>
          <Form.Item name="password" rules={[
            { required: true, message: '请输入密码！' },
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
          <Form.Item name="password1" rules={[
            { required: true, message: '请输入重复密码！' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不相同'));
              },
            }),
          ]} >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="重复密码"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item name="varification" rules={[{ required: true, message: '请输入验证码！' }]} >
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
          <Form.Item name="submit">
            <Button type="primary" htmlType="submit" block>注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}