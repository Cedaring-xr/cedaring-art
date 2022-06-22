import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../utils/brushes/CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c/CelVinyl-700f3aa8-9a7c-2384-8b8a-ea028905dd8c-v10.0-MainTex.png'

export default function Box() {
    const colorMap = useLoader(TextureLoader, texture)

    return <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach='geometry' args={[3, 3, 3]}/>
        {/* <meshLambertMaterial attach='material' color='blue' /> */}
        <meshStandardMaterial map={colorMap} />
        
    </mesh>;
}