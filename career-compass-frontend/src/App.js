/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
*/
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import CompanyList from './CompanyList';
import ScheduleList from './ScheduleList';

function App() {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCompanyListScreen, setIsCompanyListScreen] = useState(false);
  const [isScheduleListScreen, setIsScheduleListScreen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsCompanyListScreen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsCompanyListScreen(false);
    setIsScheduleListScreen(false);
  };

  const handleToggleScreen = (screen) => {
    setIsCompanyListScreen(screen === 'companyList');
    setIsScheduleListScreen(screen === 'scheduleList');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          {isCompanyListScreen && (
            <CompanyList handleLogout={handleLogout} toggleScreen={() => handleToggleScreen('scheduleList')} />
          )}
          {isScheduleListScreen && (
            <ScheduleList handleLogout={handleLogout} toggleScreen={() => handleToggleScreen('companyList')} />
          )}
        </>
      ) : (
        <>
          {isLoginScreen ? (
            <Login toggleScreen={() => setIsLoginScreen(false)} handleLogin={handleLogin} />
          ) : (
            <Register toggleScreen={() => setIsLoginScreen(true)} />
          )}
        </>
      )}
    </div>
  );
}

export default App;

