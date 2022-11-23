import React, { useCallback, useEffect, Suspense } from 'react'
import Box from '../components/ReactFiber'
import { Canvas } from '@react-three/fiber'
import ModelScene from '../utils/glbLoader'
import React3Fiber from '../utils/ArtworkSceneR3F'
import ArtworkSceneFunc from '../utils/ArtworkSceneFunc'

export default function Worlds() {
    return (
        <div>
            <h1 className="page-header">VR world creation</h1>
            {/* <Canvas className="canvas-main">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Box />
                </Suspense>
            </Canvas> */}
            {/* <React3Fiber /> */}
            <ArtworkSceneFunc />
            {/* <ModelScene /> */}
        </div>
    )
}
