import React, { useCallback, useEffect, Suspense } from 'react';
import Box from '../components/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Worlds() {
    return (
        <div>
            <h1 className="page-header">VR world creation</h1>
            <Canvas className="canvas-main">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Box />
                </Suspense>
            </Canvas>
        </div>
    )
}
