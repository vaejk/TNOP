import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from './components/index/index'
function App() {
  return (
    <div className="App">
      <Switch>
        {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
        <Route path='/home' component={Index} />
        {/* /discover/phone */}
        <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />

        {/* "/" 跳转到 "/home" */}
        <Redirect from="/" to="/home" exact />
        {/* 404 */}
        <Redirect to="/notfound" />
        {/* <Route path="/" component={Home}/> */}
      </Switch>
    </div>
  );
}

export default App;
