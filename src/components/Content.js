import React, { Component } from 'react';
import { Breadcrumb, Radio } from 'antd';

import PublicFoot from './PublicFoot';
import 'antd/dist/antd.css';
import '../scss/content.scss';
import axios from 'axios';
import Head from './Head'

class Content extends Component {
    constructor() {
        super();
        this.state = {
            html: [],
            author: "令狐千血",
            name: "逆天嫡女：狂傲太子妃",
            xie: 1,
            xie2: 2,
            xie3: 3
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params
        axios.get('http://192.168.43.3:8100/ne?id=' + id * 1)
            .then((res) => {
                let { author, biaoti, zhangjie, timu, neirong } = res.data.data[0]
                let contexts = neirong.split('\r\n\r\n')
                this.setState({
                    author: author,
                    name: zhangjie,
                    xie: timu,
                    xie2: biaoti,
                    xie3: zhangjie,
                    html: contexts
                })
            })
    }

    render() {
        console.log(this.props.match.params);

        return (
            <>
                <Head></Head>
                <div id="content">
                    <div className="path">
                        <Breadcrumb>
                            <Breadcrumb.Item>{this.state.xie}</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">{this.state.xie2}</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.xie3}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div id="main">
                        <h2>{this.state.name}</h2>
                        <p className="author">作者: <span>{this.state.author}</span></p>
                        <div id="text">
                            {this.state.html.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </div>
                        <Radio.Group size="large" onChange={this.handleSizeChange} style={{ width: "100%", textAlign: "center" }}>
                            <Radio.Button value="prev">上一章</Radio.Button>
                            <Radio.Button value="next" style={{ backgroundColor: "#00a786", color: "#fff" }}>下一章</Radio.Button>
                        </Radio.Group>
                    </div>
                    <PublicFoot />
                </div>
            </>
        )
    }
}

export default Content;