import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Head extends Component {
  constructor() {
    super()
    this.state = {
      defaultHeight: true
    }
    this.unfold = this.unfold.bind(this)
    this.go = this.go.bind(this)
  }
  go(path) {
    this.props.history.push(path)
  }
  unfold() {
    this.setState({
      defaultHeight: !this.state.defaultHeight
    })
  }
  render() {
    let styleObj = {
      height: this.state.defaultHeight ? '13vw' : '117.2vw'
    }
    return (
      <>
        <div id={'head'} style={styleObj}>
          <h1 onClick={this.go.bind(null,'/home')}>
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
              <p onClick={this.go.bind(null,'/login')}>登录</p>
              <p onClick={this.go.bind(null,'/reg')}>注册</p>
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