import React from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import {AppHeader} from "./components/AppHeader/AppHeader";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader/>
      <main className={s.AppBody}>
        <img src={logo} className={s.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={s.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
};

export default App;
