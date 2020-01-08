import React from 'react';
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
function App() {
  return (
    <div className="App">
      <Switch>
        {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
        <Route path='/home' component={Index} />
        <Route path='/sign' component={Sign} />
        <Route path='/activity' component={Activity} />
        <Route path='/new' component={NewWriter} />
        <Route path='/reg' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/pageList' component={PageList} />
        <Route path='/personal' component={Personal} />
        <Route path='/loginout' component={LoginOut} />
        <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />
        <Redirect from="/" to="/home" exact />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}
export default App;
