import {
    PerspectiveCamera,
    Scene,
    Clock,
    WebGLRenderer
} from 'three';
    
import { TiltLoader, updateBrushes } from 'three-tiltloader';

export function tiltLoad() {
    
    // General three.js scene setup
    let camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 100 );
    camera.position.set( 0, 5, -5 );
    camera.lookAt( 0, 0, 0 );

    let scene = new Scene();

    let clock = new Clock();

    let renderer = new WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    let loader = new TiltLoader();

    // Helper variable to store brushes that animate/respond to the scene
    let updateableMeshes;

    /* IMPORTANT: Point the loader to a folder of all the brush shaders and textures.
    *  This has been omitted to reduce package size and leave brush location up to the implementer.
    *  You can get a copy of the brushes folder at this project's repository.
    */
    loader.setBrushDirectory( './resources/brushes' );
    loader.load( './resources/models/cyclos.glb', ( tiltData ) => {
        /* The returned object contains two components:
        *  scene : Object3D. This is the model you want to place in the scene
        *  updateableMeshes : Mesh[]. An array of all the brush meshes that require updating. Save this to a variable.
        */
        scene.add( tiltData.scene );
        updateableMeshes = tiltData.updateableMeshes;
    });
    
    function render() {
        // Pass the mesh array to the helper function for animating.
        if( updateableMeshes !== undefined ) {
            updateBrushes( updateableMeshes, clock.getElapsedTime(), camera.position );
        }
        
        renderer.render( scene, camera );
    }

    renderer.setAnimationLoop( render );
}

