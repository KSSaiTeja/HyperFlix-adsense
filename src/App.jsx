import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
</header>
    </div>
  );
}

export default App;