import React, { Component, useLayoutEffect, useRef, useFrame } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



const TestModel = () => {
  const gltfLoader = new GLTFLoader()
  // gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes')) 
  const model = useLoader(gltfLoader, "/models/ammy.glb")
  return <primitive object={model.scene} />
}

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}



export default function ArtworkSceneR3F(card) {

  // useFrame(() => {
  //   //animation stuff
  // })
  // gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes')) //brushes folder has shader files also
  // gltfLoader.load('/models/fallFox.glb', (model) => {
  //     console.log(model)
  //     this.scene.add(model.scene)
  // }); 


  return (
    <Canvas>
      <OrbitControls />
      <Box />
    </Canvas>
  );
}

