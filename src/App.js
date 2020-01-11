import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from './components/index/index'
import Sign from './components/Sign'
import Activity from './components/Activity'
import NewWriter from './components/NewWriter'
import Register from './components/Register'
import Login from './components/Login'
import PageList from './components/PageList'
import Personal from './components/Personal'
import LoginOut from './components/LoginOut'
import Rankinglist from './components/Rankinglist'
import ChangePassword from './components/ChangePassword'

import axios from 'axios';
import cookie from 'react-cookies';


import store from './store';
import { connect } from 'react-redux';

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
//         <Route path='/home' component={Index} />
//         <Route path='/rankinglist' component={Rankinglist} />
//         <Route path='/sign' component={Sign} />
//         <Route path='/activity' component={Activity} />
//         <Route path='/new' component={NewWriter} />
//         <Route path='/reg' component={Register} />
//         <Route path='/login' component={Login} />
//         <Route path='/pageList' component={PageList} />
//         <Route path='/personal' component={Personal} />
//         <Route path='/loginout' component={LoginOut} />
//         <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
//         <Redirect from="/" to="/home" exact />
//         <Redirect to="/notfound" />
//       </Switch>
//     </div>
//   );
// }
class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    let token = cookie.load('user');
    console.log("token:", token);
    if (token) {
      console.log('yes')
      let result = await axios.post('http://localhost:8100/login', { token });
      console.log("token登录", result.data);
      let userinfo = result.data.data[0]
      delete userinfo.token
      store.dispatch({ type: 'SET_LOGIN_DATA', payload: { isLogin: true, userinfo: userinfo } })
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
          <Route path='/home' component={Index} />
          <Route path='/rankinglist' component={Rankinglist} />
          <Route path='/sign' component={Sign} />
          <Route path='/activity' component={Activity} />
          <Route path='/new' component={NewWriter} />
          <Route path='/reg' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/pageList' component={PageList} />
          <Route path='/personal' component={Personal} />
          <Route path='/loginout' component={LoginOut} />
          <Route path='/changepassword' component={ChangePassword} />
          <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return { ...state }
}

App = connect(mapStateToProps)(App);

export default App;
