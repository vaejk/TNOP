import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Index from './components/index/index'
// import Sign from './components/Sign'
// import Activity from './components/Activity'
// import NewWriter from './components/NewWriter'
// import Register from './components/Register'
// import Login from './components/Login'
// import PageList from './components/PageList'
// import Personal from './components/Personal'
// import LoginOut from './components/LoginOut'
// import Rankinglist from './components/Rankinglist'
// import ChangePassword from './components/ChangePassword'

import axios from 'axios';
import cookie from 'react-cookies';

import store from './store';
import { connect } from 'react-redux';

const Index = lazy(() => import("./components/index/index"));
const Sign = lazy(() => import('./components/Sign'));
const Activity = lazy(() => import('./components/Activity'));
const NewWriter = lazy(() => import('./components/NewWriter'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));
const Personal = lazy(() => import('./components/Personal'));
const LoginOut = lazy(() => import('./components/LoginOut'));
const Rankinglist = lazy(() => import('./components/Rankinglist'));
const PageList = lazy(() => import('./components/PageList'));
const ChangePassword = lazy(() => import('./components/ChangePassword'));
const SelectPage = lazy(() => import('./components/SelectPage'));
const Detail = lazy(() => import('./components/Detail'));
const Content = lazy(() => import('./components/Content'));

class App extends Component {

  async componentDidMount() {
    let token = cookie.load('user');
    if (token) {
      let result = await axios.post('http://localhost:8100/login', { token });
      let userinfo = result.data.data[0]
      delete userinfo.token
      store.dispatch({ type: 'SET_LOGIN_DATA', payload: { isLogin: true, userinfo: userinfo } })
    }
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
            <Route path='/home' component={Index} />
            <Route path='/rankinglist' component={Rankinglist} />
            <Route path='/sign' component={Sign} />
            <Route path='/activity' component={Activity} />
            <Route path='/new' component={NewWriter} />
            <Route path='/content/:id' component={Content} />
            <Route path='/reg' component={Register} />
            <Route path='/Detail/:id' component={Detail} />
            <Route path='/login' component={Login} />
            <Route path='/pageList' component={PageList} />
            <Route path='/personal' component={Personal} />
            <Route path='/loginout' component={LoginOut} />
            <Route path='/selectpage' component={SelectPage} />
            <Route path='/changepassword' component={ChangePassword} />
            <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
            <Redirect from="/" to="/home" exact />
            <Redirect to="/notfound" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
const mapStateToProps = function (state) {
  return { ...state }
}

App = connect(mapStateToProps)(App);

export default App;
