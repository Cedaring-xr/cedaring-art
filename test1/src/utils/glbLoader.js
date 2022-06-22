import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
    PerspectiveCamera,
    Scene,
    Clock,
    WebGLRenderer
} from 'three';


// this is the newer version


export function ThreeIcosa() {


    let scene = new Scene();
    const gltfLoader = new GLTFLoader();

    gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, './resources/brushes'));

    gltfLoader.load('./resources/models/cyclos.glb', (model) => {
        scene.add(model.scene);
    });
}
