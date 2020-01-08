import React, { Component } from 'react';
import { Button } from 'antd';

import PublicFoot from './PublicFoot';
import 'antd/dist/antd.css';
import '../scss/detail.scss';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            intro: `我叫羽岛刹那，我现在慌的一批，是这样的，有个妹子刚才扇了我一巴掌，我却对她动心了，请问这是病么？<br />什么？抖M，讨厌啦~我才不是抖M，只是碰巧喜欢那个妹子对我动粗的感觉~<br />于是，我打算对那位妹子发起积极攻势，总而言之，先讨好她，让她娇羞，再来......<br />咳咳咳！有点太猛烈了......<br />不过，虽然我很喜欢宫城小姐啦，可总觉得宫城小姐有什么秘密瞒着我？<br /> 就在某一天，当我看到宫城小姐在我面前......`,
            cataloglist: [
                {
                    name: "第11卷 外传篇：被隐藏的物语",
                    image_url: "https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg",
                    text: "冬日恋歌，霓虹灯下的约定，两人签订下的恋爱契约，终于为计划书写下圆满的句号。那之后，少年少女迈向了新的道路。新的大门敞开了，名为《被隐藏的物语》，这是关于过去，现在，以及未来的故事。<br />幼年的羽岛刹那，婚后的宫城结衣，再次成为作家的相泽惠，以及与旧人再次邂逅的吉田椿......"
                },
                {
                    name: "第11卷 外传篇：被隐藏的物语",
                    image_url: "https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg",
                    text: "冬日恋歌，霓虹灯下的约定，两人签订下的恋爱契约，终于为计划书写下圆满的句号。那之后，少年少女迈向了新的道路。新的大门敞开了，名为《被隐藏的物语》，这是关于过去，现在，以及未来的故事。<br />幼年的羽岛刹那，婚后的宫城结衣，再次成为作家的相泽惠，以及与旧人再次邂逅的吉田椿......"
                },
                {
                    name: "第11卷 外传篇：被隐藏的物语",
                    image_url: "https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg",
                    text: "冬日恋歌，霓虹灯下的约定，两人签订下的恋爱契约，终于为计划书写下圆满的句号。那之后，少年少女迈向了新的道路。新的大门敞开了，名为《被隐藏的物语》，这是关于过去，现在，以及未来的故事。<br />幼年的羽岛刹那，婚后的宫城结衣，再次成为作家的相泽惠，以及与旧人再次邂逅的吉田椿......"
                },
                {
                    name: "第11卷 外传篇：被隐藏的物语",
                    image_url: "https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg",
                    text: "冬日恋歌，霓虹灯下的约定，两人签订下的恋爱契约，终于为计划书写下圆满的句号。那之后，少年少女迈向了新的道路。新的大门敞开了，名为《被隐藏的物语》，这是关于过去，现在，以及未来的故事。<br />幼年的羽岛刹那，婚后的宫城结衣，再次成为作家的相泽惠，以及与旧人再次邂逅的吉田椿......"
                },
                {
                    name: "第11卷 外传篇：被隐藏的物语",
                    image_url: "https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg",
                    text: "冬日恋歌，霓虹灯下的约定，两人签订下的恋爱契约，终于为计划书写下圆满的句号。那之后，少年少女迈向了新的道路。新的大门敞开了，名为《被隐藏的物语》，这是关于过去，现在，以及未来的故事。<br />幼年的羽岛刹那，婚后的宫城结衣，再次成为作家的相泽惠，以及与旧人再次邂逅的吉田椿......"
                }
            ],
            update: [
                {
                    name: '终:毕业',
                    time: '7天前'
                },
                {
                    name: '遇到刹那1',
                    time: '7天前'
                },
                {
                    name: '遇到刹那2',
                    time: '7天前'
                },
                {
                    name: '香泽慧1',
                    time: '7天前'
                },
                {
                    name: '香泽慧2',
                    time: '7天前'
                },
                {
                    name: '香泽慧3',
                    time: '7天前'
                }
            ],
            show: false
        }
        this.show = this.show.bind(this);
    }
    show() {
        let { show } = this.state
        this.setState({
            show: !show
        })
    }
    render() {
        let { cataloglist, update } = this.state
        return (
            <div id="detail">
                <div className="info" style={this.state.show ? {} : { height: "70vw" }}>
                    <div className="bg"
                    // style={{background- image: "url(../images/1.jpg)"}}
                    ></div>
                    <div className="main">
                        <img src={require('../images/1.jpg')} />
                        <div className="text">
                            <h3>title</h3>
                            <p>author</p>
                            <p>type</p>
                        </div>
                    </div>
                    <div className="intro">{this.state.intro}</div>
                    <div className="more">
                        <div className="jianbian"></div>
                        <Button type="link" onClick={this.show}>更多简介</Button>
                    </div>
                </div>
                <div className="btn">
                    <Button type="primary">开始阅读</Button>
                    <Button>应援</Button>
                    <Button>收藏</Button>
                </div>
                <div className="catalog">
                    <div className="cataloghead">
                        <p>目录<span>共1卷284章114.3万字</span></p>
                        <Button type="link">更多></Button>
                    </div>
                    <div className="cataloglist">
                        <ul>
                            {
                                cataloglist.map((item, index) => {
                                    return (
                                        <li className="clist" key={index}>
                                            <img src={item.image_url} />
                                            <div className="ctext">
                                                <h4>{item.name}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="update">
                    <h4>最近更新</h4>
                    <ul>
                        {
                            update.map((item, index) => {
                                return (
                                    <li key={index} >
                                        {item.name}<span>{item.time}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <PublicFoot />
            </div >
        )
    }
}

export default Detail