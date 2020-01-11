import React, { Component } from 'react';
import { Button, Input, DatePicker, Select, Menu, Icon, message } from 'antd';
import '../scss/Personal.scss';
import 'antd/dist/antd.css';
import PublicFoot from './PublicFoot.js'
import Head from './Head.js';

import axios from 'axios'
import moment from 'moment';

import { connect } from 'react-redux';
import store from '../store';

class Personal extends Component {
    constructor() {
        super();
        this.state = {
            center: [
                {
                    title: "用户信息",
                    icon: "user"
                },
                {
                    title: "我的通知",
                    icon: "message"
                },
                {
                    title: "我的评论",
                    icon: "message"
                },
                {
                    title: "收藏夹",
                    icon: "book"
                },
                {
                    title: "我的积分",
                    icon: "credit-card"
                },
                {
                    title: "第三方账户",
                    icon: "global"
                },
                {
                    title: "我关注的",
                    icon: "star"
                },
                {
                    title: "我的粉丝",
                    icon: "like"
                },
                {
                    title: "问题咨询",
                    icon: "question"
                },
                {
                    title: "收货地址",
                    icon: "shopping-cart"
                }
            ],
            userinfo: {},
            locationlist: {
                unknown: [],
                foshan: [{ value: 'chancheng', text: '禅城' }, { value: 'sanshui', text: '三水' }, { value: 'gaoming', text: '高明' }, { value: 'nanhai', text: '南海' }, { value: 'shunde', text: '顺德' }],
                guangzhou: [{ value: 'yuexiu', text: '越秀' }, { value: 'liwan', text: '荔湾' }, { value: 'haizhu', text: '海珠' }, { value: 'tianhe', text: '天河' }, { value: 'baiyun', text: '白云' }, { value: 'huangpu', text: '黄埔' }, { value: 'panyu', text: '番禺' }, { value: 'huadu', text: '花都' }, { value: 'nansha', text: '南沙' }, { value: 'cengcheng', text: '增城' }, { value: 'conghua', text: '从化' }]
            },
            showlocationlist: 'unknown',
            location: ''
        }
        this.changelocation = this.changelocation.bind(this);
        this.changelocation2 = this.changelocation2.bind(this);
        this.callname = this.callname.bind(this);
        this.sign = this.sign.bind(this);
        this.birthday = this.birthday.bind(this);
        this.emotion = this.emotion.bind(this);
        this.orientation = this.orientation.bind(this);
        this.gender = this.gender.bind(this);
        this.submit = this.submit.bind(this);
        this.changepassword = this.changepassword.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('props:', this.props)
            let { isLogin } = this.props;
            if (isLogin) {
                this.setState({
                    userinfo: this.props.userinfo
                })
            }
            let { location } = this.props.userinfo;
            if (location) {
                let showlocationlist = location.split(',')[0];
                this.setState({
                    showlocationlist
                })
            }
        }, 300)
    }

    changelocation(value) {
        this.setState({
            showlocationlist: value
        })
        console.log(value)
        if (value !== 'unknown') {
            this.setState({
                location: `${value}`
            })
        }
    }

    changelocation2(value) {
        if (value !== 'unknown') {
            let { location, userinfo } = this.state
            this.setState({
                location: location + `,${value}`,
                userinfo: {
                    ...userinfo,
                    location: location + `,${value}`
                }
            })
        }
    }

    callname(e) {
        console.log(e.target.value)
        let { userinfo } = this.state
        this.setState({
            userinfo: {
                ...userinfo,
                callname: e.target.value
            }
        })
    }

    sign(e) {
        let { userinfo } = this.state
        this.setState({
            userinfo: {
                ...userinfo,
                sign: e.target.value
            }
        })
    }

    birthday(e) {
        let { userinfo } = this.state
        this.setState({
            userinfo: {
                ...userinfo,
                birthday: e.target.value
            }
        })
    }

    emotion(value) {
        let { userinfo } = this.state
        this.setState({
            userinfo: {
                ...userinfo,
                emotion: value
            }
        })
    }

    orientation(value) {
        let { userinfo } = this.state
        this.setState({
            userinfo: {
                ...userinfo,
                orientation: value
            }
        })
    }

    gender(value) {
        let { userinfo } = this.state
        this.setState({
            userinfo: {
                ...userinfo,
                gender: value
            }
        })
    }

    async submit() {
        let { userinfo } = this.state;
        store.dispatch({ type: "SET_USERINFO", payload: { userinfo } })
        let result = await axios.post("http://localhost:8100/update", { ...userinfo })
        if (result.data.status) {
            message.info('修改成功');
        } else {
            message.info('修改失败');
        }
    }

    changepassword() {
        this.props.history.push('/changepassword');
    }

    render() {
        let { username, callname, sign, birthday, location, emotion, orientation, gender } = this.props.userinfo
        let { locationlist, showlocationlist } = this.state
        let loc1 = '';
        let loc2 = '';
        if (location) {
            loc1 = location.split(",")[0];
            loc2 = location.split(",")[1];
        }
        return (<>
            <Head />
            <div id="personal">
                <h2><span className="square"></span>用户资料</h2>
                <div className="head">
                    <div className="himg">
                        <img src="./images/0.jpg" alt="" />
                    </div>
                    <Button type="primary">更换头像</Button>
                </div>

                <h3 className="mt4">用户ID</h3>
                <div className="id">
                    <span>{username}</span>
                    <Button type="primary">进入我的空间</Button>
                </div>

                <h3>用户名</h3>
                <div className="username"><span>ph_6df5e125852381b2c</span></div>

                <h3>昵称</h3>
                <div className="callname"><Input placeholder="请输入昵称" defaultValue={callname ? callname : 'ph_6df5e125852381b2c'} onBlur={this.callname} /></div>

                <h3>签名</h3>
                <div className="sign"><Input placeholder="个性签名" onBlur={this.sign} defaultValue={sign ? sign : ''} /></div>

                <h3>生日</h3>
                <div className="birthday"><DatePicker defaultValue={birthday ? moment(birthday || 'YYYY-MM-DD') : ''} onBlur={this.birthday} /></div>

                <h3>地区</h3>
                <div className="location">
                    <Select defaultValue={loc1 ? loc1 : "unknown"} onChange={this.changelocation}>
                        <Select.Option value="unknown">未选择</Select.Option>
                        <Select.Option value="foshan">佛山</Select.Option>
                        <Select.Option value="guangzhou">广州</Select.Option>
                    </Select>
                    <Select defaultValue={loc2 ? loc2 : "unknown"} onChange={this.changelocation2}>
                        <Select.Option value="unknown">未选择</Select.Option>
                        {
                            locationlist[showlocationlist].map((item, index) => {
                                return <Select.Option value={item.value} key={index}>{item.text}</Select.Option>
                            })
                        }
                    </Select>
                </div>

                <h3>感情</h3>
                <div className="emotion">
                    <Select defaultValue={emotion ? emotion : "unknown"} onChange={this.emotion}>
                        <Select.Option value="unknown">未知</Select.Option>
                        <Select.Option value="single">单身</Select.Option>
                        <Select.Option value="married">已婚</Select.Option>
                        <Select.Option value="love">恋爱中</Select.Option>
                        <Select.Option value="divorced">离异</Select.Option>
                        <Select.Option value="green">贩卖绿帽</Select.Option>
                        <Select.Option value="greened">头顶一片草原</Select.Option>
                    </Select>
                </div>

                <h3>取向</h3>
                <div className="orientation">
                    <Select defaultValue={orientation ? orientation : "unknown"} onChange={this.orientation}>
                        <Select.Option value="unknown">未知</Select.Option>
                        <Select.Option value="homosexual">同性恋</Select.Option>
                        <Select.Option value="heterosexuality">异性恋</Select.Option>
                        <Select.Option value="bisexual">双性恋</Select.Option>
                    </Select>
                </div>

                <h3>性别</h3>
                <div className="gender">
                    <Select defaultValue={gender ? gender : "unknown"} onChange={this.gender}>
                        <Select.Option value="unknown">未知</Select.Option>
                        <Select.Option value="male">男性</Select.Option>
                        <Select.Option value="female">女性</Select.Option>
                        <Select.Option value="xiuji">秀吉</Select.Option>
                    </Select>
                </div>

                <h3>安全</h3>
                <div className="save"><span>账户安全等级正常</span></div>

                <h3>密码</h3>
                <div className="password">
                    <span>******</span>
                    <Button type="link" onClick={this.changepassword}>修改密码</Button>
                </div>

                <h3>手机</h3>
                <div className="tel">
                    <span>136******990</span>
                    <Button type="link">更改</Button>
                </div>

                <h3>邮箱</h3>
                <div className="mail">
                    <span>{username}</span>
                    <Button type="link">绑定邮箱</Button>
                </div>

                <Button type="primary" className="submit" onClick={this.submit}>保存</Button>

                <h2>用户中心</h2>
                <Menu
                    className="center"
                    style={{ width: "100%" }}
                    defaultSelectedKeys={['0']}
                // mode={this.state.mode}
                // theme={this.state.theme}
                >
                    {
                        this.state.center.map((item, index) => {
                            return (
                                <Menu.Item key={index}>
                                    <Icon type={item.icon} />
                                    {item.title}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                <PublicFoot />
            </div></>
        )
    }
}


const mapStateToProps = function (state) {
    return state
}

Personal = connect(mapStateToProps)(Personal);

export default Personal;