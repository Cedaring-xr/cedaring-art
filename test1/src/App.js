import './App.scss';
import React from 'react';

//pages
import Layout from "./components/Layout";
import PageRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Layout />
      <PageRoutes />
    </div>
  );
}

export default App;
