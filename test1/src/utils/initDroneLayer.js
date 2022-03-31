import * as THREE from 'three';
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// init();
// const loader = new GLTFLoader();
const gltfLoader = new GLTFLoader();

export function init() {
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.05, 500 );
    camera.position.z = 1;
    camera.position.y = 0.5;

    const scene = new THREE.Scene();


    // loader.load('otter/scene.gltf', (gltf) => {
    //     let model = gltf.scene
    //     scene.add(model)
    // })


    gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../brushes/'));

    gltfLoader.load('/models/pinata.glb', (model) => {
        let modelScale = model.scene
        modelScale.scale.set(.65, .65, .65)
        scene.add(model.scene);
    });

    const light = new THREE.AmbientLight(0xffffff, 2);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );

    function animation( time ) {
    
        renderer.render( scene, camera );
    
    }

    // const scene = new Scene();
    // const gltfLoader = new GLTFLoader();

    // gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, './resources/brushes'));

    // gltfLoader.load('./resources/models/cyclos.glb', (model) => {
    //     scene.add(model.scene);
    // });
}

// animation

