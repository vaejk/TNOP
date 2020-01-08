import React, { Component } from 'react';
import { Form, Icon, Input, Checkbox, Button, Divider } from 'antd';
import '../scss/Login.scss';
import 'antd/dist/antd.css'
import Head from './Head'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tel: '',
            checkcode: ''
        }
    }

    render() {
        console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        return (
            <>
            <Head></Head>
            <div id="login">
                <h2>快捷登录</h2>
                <p>若未创建账号，将自动创建</p>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('tel', {
                            rules: [{ required: true, message: '请正确输入电话号码' }],
                        })(
                            <Input
                                prefix={<><Icon type="phone" style={{ color: 'rgba(0,0,0,.5)' }} /> <span style={{ color: 'rgba(0,0,0,.5)' }}>+86</span></>}
                                placeholder="请输入手机号"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入验证码' }],
                        })(
                            <Input
                                suffix={<span style={{ color: '#2ac9ad', float: "right" }}>获取验证码</span>}
                                type="checkcode"
                                placeholder="checkcode"
                            />,
                        )}
                    </Form.Item>
                </Form>
                <p className="reg">快速注册</p>
                <Button className="loginbtn" type="link" shape="round" >
                    快捷登录
                </Button>
                <p className="login2">账号密码登录</p>
                <p className="agreed">登录即代表您已经同意<span className="agreement">用户使用协议</span></p>
                <Divider>  OR  </Divider>
                <p className="icons"><Icon type="qq" className="icon" /><Icon type="wechat" className="icon" /><Icon type="weibo" className="icon" /></p>
            </div>
            </>
        )
    }
}

Login = Form.create({})(Login);

export default Login;