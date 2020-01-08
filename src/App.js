import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './scss/base.css';
// import Login from './components/Login.js';
// import Register from './components/Register.js';
// import PublicFoot from './components/PublicFoot.js';
// import Personal from './components/Personal.js';
// import PageList from './components/PageList.js';
// import Activity from './components/Activity.js';
// import NewWriter from './components/NewWriter.js';
// import Sign from './components/Sign.js';
// import Content from './components/Content.js';
// import Detail from './components/Detail.js';
import LoginOut from './components/LoginOut.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LoginOut />
    </div>
  );
}

export default App;
