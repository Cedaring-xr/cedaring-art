import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect } from 'react';
import { init } from './utils/initDroneLayer';

function App() {
  useEffect(() => {
    init();

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul> 
          <li>home</li>
          <li>about</li>
          <li>artwork</li>
          <li>worlds</li>
          <li>nfts</li>
          <li>writings</li>
          <li>contact</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
