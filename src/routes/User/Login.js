import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Alert } from 'antd';
import Login from 'components/Login';
import styles from './Login.less';
import loginImg from './login.png';

const { UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
  testing: loading.effects['login/test'],
}))
export default class LoginPage extends Component {
  state = {
    type: 'account',
    // autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      this.props.dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  handleTest = () => {
    const { type } = this.state;
    this.props.dispatch({
      type: 'login/test',
      payload: {
        type,
      },
    });
  };

  /*   changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    }); 
  }; */

  renderMessage = content => {
    return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
  };

  render() {
    const { login, submitting } = this.props;
    const { type } = this.state;
    window.console.log('login', login);
    return (
      <div className={styles.main}>
        <div className={styles.left}>
          <img src={loginImg} alt="图片" />
          <p className={styles.hover}>
            登录蜂巢里<br />启用会员服务
          </p>
        </div>
        <Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
          {/* <Tab key="account" tab="账户密码登录">
            {login.status === 'error' &&
            login.type === 'account' &&
            !login.submitting &&
            this.renderMessage('账户或密码错误（admin/888888）')}
            <UserName name="username" placeholder="admin/user" defaultValue="user" />
            <Password name="password" placeholder="888888/123456" defaultValue="123456" />
          </Tab> */}
          {/* <Tab key="mobile" tab="手机号登录">
            {login.status === 'error' &&
            login.type === 'mobile' &&
            !login.submitting &&
            this.renderMessage('验证码错误')}
            <Mobile name="mobile" />
            <Captcha name="captcha" />
          </Tab> */}

          <div>
            <h1>会员登录</h1>
            {login.status === 'error' &&
              login.type === 'account' &&
              !login.submitting &&
              this.renderMessage('账户或密码错误（admin/888888）')}
            <UserName name="username" placeholder="admin/user" defaultValue="user" />
            <Password name="password" placeholder="888888/123456" defaultValue="123456" />
          </div>
          <div>
            {/* <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
              自动登录
            </Checkbox> */}
            <a className={styles.forget} type="primary" onClick={this.handleTest}>
              忘记密码
            </a>
            {/* <Button style={{ float: 'right' }} type="primary" onClick={this.handleTest} loading={testing}>
              忘记密码
            </Button> */}
          </div>
          <Submit loading={submitting} className={styles.submit}>
            登录
          </Submit>
          <div className={styles.other}>
            {/* 其他登录方式
            <Icon className={styles.icon} type="alipay-circle" />
            <Icon className={styles.icon} type="taobao-circle" />
            <Icon className={styles.icon} type="weibo-circle" /> */}

            <Link className={styles.register} to="/user/register">
              还没有账号？<span>注册账户</span>
            </Link>
          </div>
        </Login>
      </div>
    );
  }
}
