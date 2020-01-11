import React, { Component } from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import PublicFoot from './PublicFoot';
import 'antd/dist/antd.css';
import Head from './Head';
import axios from 'axios';
import '../scss/detail.scss';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
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
            show: false,
            api: [],
            id: 0
        }
        this.show = this.show.bind(this);
        this.go = this.go.bind(this);
    }
    show() {
        let { show } = this.state
        this.setState({
            show: !show
        })
    }
    go(id) {
        this.props.history.push('/content/' + id)
    }
    componentDidMount() {
        let id = { "id": this.props.match.params.id * 1 };
        axios.post('http://192.168.43.3:8100/xiangqings', id)
            .then((res) => {
                this.setState({
                    api: res.data.data[0],
                    id: this.props.match.params.id * 1
                })
            })

    }
    render() {
        let { cataloglist, update } = this.state
        let { images, title, author, tag1, jieshao, zhangjie1, zhangjie2, id } = this.state.api
        return (
            <>
                <Head></Head>
                <div id="detail">
                    <div className="info" style={this.state.show ? {} : { height: "70vw" }}>
                        <div className="bg"
                        // style={{background- image: "url(../images/1.jpg)"}}
                        ></div>
                        <div className="main">
                            <img src={images} />
                            <div className="text">
                                <h3>{title}</h3>
                                <p>{author}</p>
                                <p>{tag1}</p>
                            </div>
                        </div>
                        <div className="intro">{jieshao}</div>
                        <div className="more">
                            <div className="jianbian"></div>
                            <Button type="link" onClick={this.show}>更多简介</Button>
                        </div>
                    </div>
                    <div className="btn">
                        <Button type="primary" onClick={this.go.bind(null, this.state.id)}>开始阅读</Button>
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
                                {/* {
                                cataloglist.map((item, index) => {
                                    return (
                                        <li className="clist" key={index}>
                                            <img src={item.image_url} />
                                            <div className="ctext">
                                                <h4>{zhangjie1}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            } */}
                                <li className="clist" key={1} onClick={this.go.bind(null, this.state.id)}>
                                    <img src={images} />
                                    <div className="ctext">
                                        <h4>{zhangjie1}</h4>
                                        <p>{jieshao}</p>
                                    </div>
                                </li>
                                <li className="clist" key={2}>
                                    <img src={images} />
                                    <div className="ctext">
                                        <h4>{zhangjie2}</h4>
                                        <p>{jieshao}</p>
                                    </div>
                                </li>
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
            </>
        )
    }
}
Detail = withRouter(Detail)
export default Detail