import React from 'react'
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
