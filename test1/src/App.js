import './App.scss';
import React, { useCallback, useEffect, Suspense } from 'react';

//pages
import Header from './components/Header';
import Layout from "./components/Layout";
import Main from './components/Main';
import Home from './pages/Home';
import Artwork from './pages/Artwork';
import Climbing from './pages/Climbing';
import Blog from './pages/Blog';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Switch, Route } from "react-router-dom";
// import { AltScene } from './utils/altScene';
// import Box from './components/Box';
// import { blocksScene } from './utils/blocksScene';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routing from './routes';


// @react-three/fiber is a framework that renders react components in Three
// @react-three/drei is a group of pre-made functions useful in Three
// Both are nessesary additions

function App() {
  return (
    
    
    <div className="App">
      <Layout>
          <Header />
          <Routing />
      </Layout>
      <Main />
    </div>
  );
}

export default App;
