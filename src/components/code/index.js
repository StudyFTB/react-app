import React from 'react';
import { Button, message } from 'antd';
import { GetRegisterSms } from '../../apis/user';

export class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null, // 计时器
      dwonNum: 60, // 计时器显示
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  // 点击获取验证码触发
  onCodeClick = () => {
    const {username} = this.props;
    if(!username) {
      message.info('用户名不能为空');
      return false;
    }
    this.props.onCodeChange('loading');
    GetRegisterSms({username}).then(res => {
      if(!res.data.resCode){
        this.props.onCodeChange('downcount');
        this.setTimer();
        message.success(res.data.message);
      } else {
        this.props.onCodeChange('normal');
        message.warning(res.data.message);
      }
    }).catch(e => {
      this.props.onCodeChange('normal');
      message.warning(e);
      console.log(e);
    });
  }
  // 倒计时
  setTimer = () => {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      this.setState((state) => ({
        dwonNum: state.dwonNum - 1
      }))
      if(this.state.dwonNum <= 0) {
        clearInterval(this.state.timer);
        this.setState({
          dwonNum: 0
        });
        this.props.onCodeChange('normal');
      }
    }, 1000);
    this.setState({ timer })
  }

  render() {
    const { dwonNum } = this.state;
    const { status } = this.props;
    return (
      <Button danger type="primary" block onClick={this.onCodeClick}
        disabled={status === 'disabled' || status === 'downcount'}
        loading={status === 'loading'}>
        {status === 'loading' ? '发送中' : status === 'downcount' ? dwonNum+'S' : '获取验证码'}
      </Button>
    )
  }
}