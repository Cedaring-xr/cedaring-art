import './App.css';
import React, { useCallback, useEffect, Suspense } from 'react';
import { init } from './utils/initDroneLayer';
import Header from './components/Header';
import Main from './components/Main';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { AltScene } from './utils/altScene';

import Box from './components/Box';
import { ThreeIcosa } from './utils/glbLoader';


// @react-three/fiber is a framework that renders react components in Three
//@react-three/drei is a group of pre-made functions useful in Three
// Both are nessesary additions

function App() {
  return (
    
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Canvas className="canvas-main">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas-alt">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AltScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
