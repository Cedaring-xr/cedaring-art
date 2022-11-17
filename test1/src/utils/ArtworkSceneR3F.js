import React, { Component, useLayoutEffect, useRef, useFrame } from "react"
import { Canvas, useLoader } from "@react-three/fiber"



// const TestModel = () => {
//   const model = useLoader(GLTFLoader, "")
//   return <primitive object={model.scene} />
// }



export default function ArtworkSceneR3F(card) {

  // useFrame(() => {
  //   //animation stuff
  // })
   
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

