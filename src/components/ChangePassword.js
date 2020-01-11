import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import '../scss/Login.scss';
import 'antd/dist/antd.css';

import { withRouter } from 'react-router-dom';

import md5 from 'js-md5';
import axios from 'axios';
import { connect } from 'react-redux';

import Head from './Head';
import store from '../store';

class ChangePassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            upassword: '',
            password: '',
            npassword: '',
            cpassword: ''
        }
        this.validFunction = this.validFunction.bind(this);
        this.checkpassword = this.checkpassword.bind(this);
        this.submit = this.submit.bind(this);
        this.issame = this.issame.bind(this);
    }

    componentDidMount() {

        setTimeout(() => {
            // let { username } = this.props.userinfo;
            let { password } = this.props.userinfo;
            this.setState({
                // username: username,
                upassword: password
            })
        }, 500)
    }

    checkpassword(rule, value, callback) {//确认密码的验证
        let { upassword } = this.state;
        if (value) {//判断非空
            value = md5(value)
            if (upassword === value) {
                //两次密码相同则修改state
                this.setState({
                    password: value
                })
                callback();
            } else {
                this.setState({
                    password: ""
                })
                callback("与原密码不相符")
            }
        } else {
            callback('请输入密码')
        }
    }

    issame(rule, value, callback) {//确认密码的验证
        let { upassword } = this.state;
        if (value) {//判断非空
            let reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
            if (reg.test(value)) {
                value = md5(value)
                if (upassword === value) {
                    callback("与原密码相同")
                } else {
                    this.setState({
                        npassword: value
                    })
                    callback();
                }
            } else {
                this.setState({
                    npassword: ''
                })
                callback('密码格式不正确')
            }
        } else {
            callback('请输入密码')
        }
    }

    validFunction(rule, value, callback) {//确认密码的验证
        let { npassword } = this.state;
        if (value) {//判断非空
            value = md5(value)
            if (npassword === value) {
                //两次密码相同则修改state
                this.setState({
                    cpassword: value
                })
                callback();
            } else {
                this.setState({
                    cpassword: ""
                })
                callback("两次输入密码不一致")
            }
        } else {
            callback('请确认密码')
        }
    }

    async submit() {
        let { password, npassword, cpassword } = this.state;
        console.log(password)
        if (password && cpassword) {
            let { userinfo } = this.props;
            console.log(userinfo);
            userinfo = {
                ...userinfo,
                password: md5(npassword)
            }
            store.dispatch({ type: 'SET_USERINFO', payload: { userinfo } });
            let result = await axios.post("http://localhost:8100/changepassword",
                {
                    username: userinfo.username,
                    password: npassword
                }
            )
            if (result.data.status) {
                message.info('修改成功，即将进入个人中心');
                setTimeout(() => {

                })
            } else {
                message.info('修改失败');
            }
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Head />
                <div id="login">
                    <h2>修改密码</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <p style={{ fontSize: '4vw', color: '#666', fontWeight: '900' }}>原密码:</p>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{
                                    validator: this.checkpassword
                                }],
                            })(
                                <Input
                                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                // onChange={e => {
                                //     let reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
                                //     let value = e.target.value
                                //     if (reg.test(value)) {
                                //         this.setState({
                                //             password: e.target.value
                                //         })
                                //     }
                                // }}
                                />,
                            )}
                        </Form.Item>
                        <p style={{ fontSize: '4vw', color: '#666', fontWeight: '900' }}>新密码:</p>
                        <Form.Item>
                            {getFieldDecorator('npassword', {
                                rules: [{ required: true, message: '请输入密码' },
                                {
                                    pattern: new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, "g"),
                                    message: "密码格式不正确"
                                },
                                {
                                    validator: this.issame
                                }],
                            })(
                                <Input
                                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    type="text"
                                    placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <p style={{ fontSize: '4vw', color: '#666', fontWeight: '900' }}>确认新密码:</p>
                        <Form.Item>
                            {getFieldDecorator('cpassword', {
                                rules: [
                                    {
                                        validator: this.validFunction
                                    }],
                            })(
                                <Input
                                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    type="text"
                                    placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>

                    </Form>

                    <Button className="loginbtn" type="link" shape="round" onClick={this.submit}>
                        确认修改
                    </Button>
                </div></>
        )
    }
}

ChangePassword = Form.create({})(ChangePassword);

ChangePassword = withRouter(ChangePassword);

const mapStateToProps = function (state) {
    return state
}

ChangePassword = connect(mapStateToProps)(ChangePassword);

export default ChangePassword;