import React, { Component } from 'react';

import { Button } from 'antd';

import 'antd/dist/antd.css';

class LoginOut extends Component {
    constructor() {
        super();
        this.state = {
            count: 3
        }
    }

    componentDidMount() {
        let time = setInterval(() => {
            let { count } = this.state;
            count -= 1;
            if (count === 0) {
                // clearInterval(time);
                console.log("jump")
            } else {
                this.setState({
                    count
                })
            }
        }, 1000)
    }

    render() {
        return (
            <div id="loginout" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ border: "1px solid #58bc58", padding: "10vw", marginTop: "10vw" }}>
                    <p>注销成功</p>
                    <p>本页将在 <span>{this.state.count}</span> 秒后自动跳转</p>
                    <p>如果页面没有跳转，请<Button type="link">点击这里</Button></p>
                </div>
            </div>
        )
    }
}

export default LoginOut;