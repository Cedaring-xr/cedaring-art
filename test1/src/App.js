import './App.css';
import React, { useCallback, useEffect, Suspense } from 'react';
import { init } from './utils/initDroneLayer';
import { ThreeIcosa } from './utils/glbLoader';
import Header from './components/Header';
import Main from './components/Main';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { altScene } from './utils/altScene';

import Box from './components/Box';



// @react-three/fiber is a react renderer for three 
//@react-three/drei is a group of pre-made functions useful in three

function App() {
  useEffect(() => {
    // init();
    // ThreeIcosa();
    altScene();

  }, [])
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
    </div>
  );
}

export default App;
