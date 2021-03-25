import React from 'react';
import './index.scss';
import { Form, Input } from 'antd';

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <Form>
          <Form.Item label="Username" name="username" >
            <Input autoComplete={false} />
          </Form.Item>
        </Form>
      </div>
    )
  }
}