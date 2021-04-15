import React from 'react';
import './index.scss';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined, VerifiedOutlined } from '@ant-design/icons';
import { validate_password, reg_mail } from '../../utils/validate';
import { Register } from '../../apis/user';
import { Code } from '../../components/code';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      code_button_status: 'disabled', // 获取验证码的按钮的状态，normal正常，loading发送中，disabled未验证通过，downcount倒计时
    };
  }

  onFinish = (values) => {
    Register(values).then(res => {
      if(!res.data.resCode){
        message.success(res.data.message);
        this.props.onSpanClick('login');
        clearInterval(this.state.timer);
      }else {
        message.warning(res.data.message);
      }
    }).catch(e => {});
  };

  handleCLick = () => {
    this.props.onSpanClick('login');
  }

  changeInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  codeStatusChange = status => {
    this.setState({
      code_button_status: status
    })
  }

  render() {
    const { username, code_button_status } = this.state;
    const _this = this;
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
            { required: true, message: '请输入用户名' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || reg_mail.test(getFieldValue('username'))) {
                  if(code_button_status === 'disabled') {
                    _this.setState({code_button_status:'normal'})
                  }
                  return Promise.resolve();
                }
                if(code_button_status === 'normal') {
                  _this.setState({code_button_status:'disabled'})
                }
                return Promise.reject(new Error('邮箱格式不正确'));
              },
            }),
          ]} >
            <Input value={username} onChange={this.changeInput}
             prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" autoComplete="off" />
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
          <Form.Item name="code" rules={[{ required: true, message: '请输入验证码！' }]} >
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
                  <Code status={code_button_status} onCodeChange={ this.codeStatusChange } username={username}></Code>
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