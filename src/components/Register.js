import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import '../scss/Register.scss';
import 'antd/dist/antd.css'

import md5 from 'js-md5';

import { create, verify } from "../utils/jsonwebtoken.js";

import Head from './Head'


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            comfirm: ''
        }
        this.reg = this.reg.bind(this)
        this.validFunction = this.validFunction.bind(this)
    }

    reg() {
        let { mail, password, comfirm } = this.state
        console.log(mail, password, comfirm)
        if (mail && password && password == comfirm) {
            mail = create(mail);
            password = md5(password)
            console.log("mail", mail, 'password', password)
        }
    }

    validFunction(rule, value, callback) {
        let { password } = this.state;
        if (value) {
            if (password == value) {
                this.setState({
                    comfirm: value
                })
                callback();
            } else {
                callback("两次输入密码不一致")
            }
        } else {
            callback('请确认密码')
        }
    }

    render() {
        console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Head />
                <div id="register">
                    <h2>快速注册</h2>
                    <p>若未创建账号，将自动创建</p>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('mail', {
                                rules: [{ required: true, message: '请输入邮箱地址' },
                                {
                                    pattern: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, "g"),
                                    message: "邮箱地址不正确"
                                }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    placeholder="请输入邮箱地址"
                                    onChange={e => {
                                        let reg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
                                        let value = e.target.value
                                        if (reg.test(value)) {
                                            this.setState({
                                                mail: e.target.value
                                            })
                                        }
                                    }}
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
                                    // suffix={<span style={{ color: '#2ac9ad', float: "right" }}>获取验证码</span>}
                                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    type="password"
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
                        <Form.Item>
                            {getFieldDecorator('comfirm', {
                                rules: [
                                    // { required: true, message: '请确认密码' },
                                    // {
                                    //     pattern: new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, "g"),
                                    //     message: "密码格式不正确"
                                    // },
                                    {
                                        validator: this.validFunction
                                    }
                                ],
                            })(
                                <Input
                                    // suffix={<span style={{ color: '#2ac9ad', float: "right" }}>获取验证码</span>}
                                    prefix={<Icon type="check-circle" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    type="password"
                                    placeholder="请确认密码"
                                    onChange={e => {
                                        let reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
                                        let value = e.target.value
                                        if (reg.test(value)) {
                                            this.setState({
                                                comfirm: e.target.value
                                            })
                                        }
                                    }}
                                />,
                            )}
                        </Form.Item>
                    </Form>
                    <p className="reg">邮箱注册</p>
                    <Button className="regbtn" type="link" shape="round" onClick={this.reg}>
                        快速注册
                </Button>
                    <p className="register2">已有账号？直接登录</p>
                    <p className="agreed">登录即代表您已经同意<span className="agreement">用户使用协议</span></p>
                </div></>
        )
    }
}

Register = Form.create({})(Register);

export default Register;