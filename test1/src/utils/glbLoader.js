import * as THREE from 'three';
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PerspectiveCamera, Scene, Clock, WebGLRenderer } from 'three';


// this is the newer version


export function ThreeIcosa() {


    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.z = 5;


    loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../brushes'));

    loader.load('/models/cyclos.glb', (model) => {
        scene.add(model.scene);
    });
}
