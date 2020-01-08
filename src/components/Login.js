import React, { Component } from 'react';
import { Form, Icon, Input, Checkbox, Button, Divider } from 'antd';
import '../scss/Login.scss';
import 'antd/dist/antd.css';

import { create } from "../utils/jsonwebtoken.js";
import md5 from 'js-md5';
import cookie from 'react-cookies';

import Head from './Head';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            quick: false
        }
        this.login = this.login.bind(this)
    }

    login() {
        let { mail, password, quick } = this.state;
        console.log(mail, password, quick);
        if (mail && password) {
            mail = create(mail);
            console.log("mail转换成token：", mail)
            password = md5(password);

            //发送axios请求
            let result = true;
            if (result) {

                let now = new Date().getTime();
                if (quick) {
                    let expires = new Date(now + 1000 * 60 * 60 * 24 * 7);
                    cookie.save('user', mail, { expires });
                } else {
                    cookie.save('user', mail, { expires: now })
                }
            }
        }
    }

    render() {
        console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Head />
                <div id="login">
                    <h2>快捷登录</h2>
                    <p>若未创建账号，将自动创建</p>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('mail', {
                                rules: [
                                    { required: true, message: '请输入邮箱地址' },
                                    {
                                        pattern: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, "g"),
                                        message: "邮箱地址不正确"
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    placeholder="请输入邮箱"
                                    onChange={
                                        e => {
                                            let reg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
                                            let value = e.target.value
                                            if (reg.test(value)) {
                                                this.setState({
                                                    mail: value
                                                })
                                            }
                                        }
                                    }
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' },
                                {
                                    pattern: new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, "g"),
                                    message: "密码格式不正确"
                                }],
                            })(
                                <Input
                                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    // suffix={<span style={{ color: '#2ac9ad', float: "right" }}>获取验证码</span>}
                                    type="checkcode"
                                    placeholder="请输入密码"
                                    onChange={e => {
                                        let reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
                                        let value = e.target.value
                                        if (reg.test(value)) {
                                            this.setState({
                                                password: e.target.value
                                            })
                                        }
                                    }}
                                />,
                            )}
                        </Form.Item>
                    </Form>
                    <p className="log">
                        <span>快速注册</span>
                        <Checkbox onChange={e => { if (e.target.checked) { this.setState({ quick: true }) } }}>七天免登录</Checkbox>
                    </p>
                    <Button className="loginbtn" type="link" shape="round" onClick={this.login}>
                        快捷登录
                </Button>
                    <p className="login2">账号密码登录</p>
                    <p className="agreed">登录即代表您已经同意<span className="agreement">用户使用协议</span></p>
                    <Divider>  OR  </Divider>
                    <p className="icons"><Icon type="qq" className="icon" /><Icon type="wechat" className="icon" /><Icon type="weibo" className="icon" /></p>
                </div></>
        )
    }
}

Login = Form.create({})(Login);

export default Login;