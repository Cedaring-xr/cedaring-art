import React from 'react'
import PageRoutes from './routes'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
