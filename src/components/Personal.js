import React, { Component } from 'react';
import { Button, Input, DatePicker, Select, Option, Menu, Icon } from 'antd';
import '../scss/Personal.scss';
import 'antd/dist/antd.css';
import PublicFoot from './PublicFoot.js'

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
            ]
        }
    }

    render() {
        return (
            <div id="personal">
                <h2><span className="square"></span>用户资料</h2>
                <div className="head">
                    <div className="himg">
                        <img src="./images/0.jpg" />
                    </div>
                    <Button type="primary">更换头像</Button>
                </div>

                <h3 className="mt4">用户ID</h3>
                <div className="id">
                    <span>111</span>
                    <Button type="primary">进入我的空间</Button>
                </div>

                <h3>用户名</h3>
                <div className="username"><span>ph_6df5e125852381b2c</span></div>

                <h3>昵称</h3>
                <div className="callname"><Input placeholder="请输入昵称" value={'ph_6df5e125852381b2c'} /></div>

                <h3>签名</h3>
                <div className="sign"><Input placeholder="个性签名" /></div>

                <h3>生日</h3>
                <div className="birthday"><DatePicker /></div>

                <h3>地区</h3>
                <div className="location">
                    <Select defaultValue="Zhejiang">
                        <Select.Option value="Zhejiang">Zhejiang</Select.Option>
                        <Select.Option value="Jiangsu">Jiangsu</Select.Option>
                    </Select>
                    <Select defaultValue="Zhejiang">
                        <Select.Option value="Zhejiang">Zhejiang</Select.Option>
                        <Select.Option value="Jiangsu">Jiangsu</Select.Option>
                    </Select>
                </div>

                <h3>感情</h3>
                <div className="emotion">
                    <Select defaultValue="weizhi">
                        <Select.Option value="weizhi">未知</Select.Option>
                        <Select.Option value="happy">单身</Select.Option>
                        <Select.Option value="happy">已婚</Select.Option>
                        <Select.Option value="happy">恋爱中</Select.Option>
                        <Select.Option value="happy">离异</Select.Option>
                        <Select.Option value="happy">贩卖绿帽</Select.Option>
                        <Select.Option value="happy">头顶一片草原</Select.Option>
                    </Select>
                </div>

                <h3>取向</h3>
                <div className="orientation">
                    <Select defaultValue="weizhi">
                        <Select.Option value="weizhi">未知</Select.Option>
                        <Select.Option value="happy">同性恋</Select.Option>
                        <Select.Option value="happy">异性恋</Select.Option>
                        <Select.Option value="happy">双性恋</Select.Option>
                    </Select>
                </div>

                <h3>性别</h3>
                <div className="gender">
                    <Select defaultValue="weizhi">
                        <Select.Option value="weizhi">未知</Select.Option>
                        <Select.Option value="happy">男性</Select.Option>
                        <Select.Option value="happy">女性</Select.Option>
                        <Select.Option value="happy">秀吉</Select.Option>
                    </Select>
                </div>

                <h3>安全</h3>
                <div className="save"><span>账户安全等级正常</span></div>

                <h3>密码</h3>
                <div className="password">
                    <span>******</span>
                    <Button type="link">修改密码</Button>
                </div>

                <h3>手机</h3>
                <div className="tel">
                    <span>136******990</span>
                    <Button type="link">更改</Button>
                </div>

                <h3>邮箱</h3>
                <div className="mail">
                    {/* <span>545489973@qq.com</span> */}
                    <Button type="link">绑定邮箱</Button>
                </div>

                <Button type="primary" className="submit">保存</Button>

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
                    {/* <Menu.Item key="1">
                        <Icon type="mail" />
                        Navigation One
                    </Menu.Item>*/}
                </Menu>
                <PublicFoot />
            </div>
        )
    }
}

export default Personal;