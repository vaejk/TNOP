import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import { Icon } from 'antd';
class Head extends Component {
  constructor() {
    super()
    this.state = {
      defaultHeight: true,
      isLogin: false
    }
    this.unfold = this.unfold.bind(this)
    this.go = this.go.bind(this)
    this.loginout = this.loginout.bind(this)
  }
  go(path) {
    this.props.history.push(path)
  }
  unfold() {
    this.setState({
      defaultHeight: !this.state.defaultHeight
    })
  }

  componentDidMount() {
    let result = cookie.load("user");
    if (result) {
      this.setState({
        isLogin: true
      })
    }
  }

  loginout() {
    cookie.remove("user");
    this.go('/LoginOut');
  }

  render() {
    let styleObj = {
      height: this.state.defaultHeight ? '13vw' : 'auto'
    }
    return (
      <>
        <div id={'head'} style={styleObj}>
          <h1 onClick={this.go.bind(null, '/home')}>
            轻之文库
          </h1>
          <div className={'headright'} onClick={this.unfold}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={'yc'}>
            <li className={'head'}>
              <p>全部分类</p>
              <p className={'tb'}>排行榜<i className={'pai'}></i></p>
              <p>APP</p>
            </li>
            <li className={'seek'}>
              <div className={'input'}> <input type={'text'} placeholder={'我的便携式游戏女友'}></input>
                <i className={'seekxtb'}> </i></div>
            </li>
            <li className={'footer'}>
              <p><i className={'fan'}></i>简繁切换</p>
              {
                this.state.isLogin ?
                  <>
                    <p><Icon type="user" onClick={this.go.bind(null, '/personal')} />个人中心</p>
                    <p><Icon type="edit" />签到</p>
                    <p><Icon type="mail" />系统通知</p>
                    <p><Icon type="mail" />作者通知</p>
                    <p><Icon type="mail" />投稿管理</p>
                    <p><Icon type="loginout" onClick={this.loginout} />退出登录</p>
                    <p><Icon type="appstore" />收藏夹</p>
                  </>
                  :
                  <>
                    <p onClick={this.go.bind(null, '/login')}>登录</p>
                    <p onClick={this.go.bind(null, '/reg')}>注册</p>
                  </>
              }
              <button className={'tb'}><i className={'tougao'}></i>投稿</button>
            </li>
          </ul>
        </div>
      </>
    )
  }
}
Head = withRouter(Head)
export default Head;