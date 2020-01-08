import React, { Component } from 'react';
import { Icon, Button, Menu, Pagination } from 'antd';
import Head from './Head'
import '../scss/PageList.scss';
import 'antd/dist/antd.css';
import PublicFoot from './PublicFoot.js';

class PageList extends Component {
    constructor() {
        super();

        this.state = {
            list: [
                {
                    text: '全部',
                    type: 'all'
                },
                {
                    text: '文库精选',
                    type: 'choiceness'
                },
                {
                    text: '幻想',
                    type: 'fantasy'
                },
                {
                    text: '战斗',
                    type: 'battle'
                },
                {
                    text: '恋爱'
                },
                {
                    text: '搞笑'
                },
                {
                    text: '日常'
                },
                {
                    text: '校园'
                },
                {
                    text: '后宫'
                },
                {
                    text: '科幻'
                },
                {
                    text: '治愈'
                },
                {
                    text: '超能力'
                },
                {
                    text: '节操'
                },
                {
                    text: '妖怪'
                },
                {
                    text: '恐怖'
                },
                {
                    text: '妹控'
                },
                {
                    text: '伪娘'
                },
                {
                    text: '魔法少女'
                },
                {
                    text: '乙女'
                },
                {
                    text: '百合'
                },
                {
                    text: '偶像'
                },
                {
                    text: '悬疑'
                }
            ],
            jiashuju: [
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                },
                {
                    image_url: './images/1.jpg',
                    title: '我的未来骑士团不可能都是步兵'
                },
                {
                    image_url: './images/2.jpg',
                    title: '噬暗'
                }
            ]
        }
    }

    render() {
        return (
            <>
            <Head></Head>
            <div>
                <div id="pagelist" >
                    <h2>
                        <div><span className="square"></span>分类检索</div>
                        <div className="changetype">
                            <Icon type="appstore" />
                            <Icon type="database" />
                        </div>
                    </h2>
                    {/* <ul className="list">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li>
                                        <Button type="primary" shape="round" >
                                            {item.text}
                                        </Button>
                                    </li>
                                )
                            })
                        }
                    </ul> */}
                    <Menu
                        className="list"
                        style={{ width: "100%" }}
                        defaultSelectedKeys={['0']}
                    // mode={this.state.mode}
                    // theme={this.state.theme}
                    >
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <Menu.Item key={index}>
                                        {item.text}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                    <ul className="fictionlist">
                        {
                            this.state.jiashuju.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <img src={item.image_url} />
                                        <p className="title">{item.title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Pagination defaultCurrent={6} total={500} />
                </div>
                <PublicFoot />
            </div>
            </>
        )
    }
}

export default PageList;