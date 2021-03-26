import React from 'react';
import './index.scss';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'login'
    }
  }

  changeType = (type) => {
    this.setState({
      formType: type
    })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.formType === 'login' ? <LoginForm onSpanClick={this.changeType}></LoginForm> : <RegisterForm onSpanClick={this.changeType}></RegisterForm>
        }
      </div>
    )
  }
}