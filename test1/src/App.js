import './App.css';
import { useCallback, useEffect } from 'react';
import { init } from './utils/initDroneLayer';
import Header from './components/Header';



function App() {
  useEffect(() => {
    init();

  }, [])
  return (
    
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
