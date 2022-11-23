import React, { useEffect, useRef } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"


function ArtworkSceneFunc() {

    const mountRef = useRef(null);  // use Ref to mount the scene onto the div


    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const controls = new OrbitControls(camera, renderer.domElement)
        const gltfLoader = new GLTFLoader()
        const clock = new THREE.Clock()

        scene.background = new THREE.Color(0.3, 0.3, 0.3);
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const directLight = new THREE.DirectionalLight(0xffaaff, 3)
        // this.light2 = new THREE.PointLight(0xffffff , 2)
        // this.light3 = new THREE.AmbientLight(0xf5d058, 0.5)
        directLight.position.set(-40, 10, 0)
        scene.add(directLight)

        gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes')) //brushes folder has shader files also
        gltfLoader.load("./models/model.glb", (model) => {
            controls.target.set(0, 0.95, 0)
            scene.add(model.scene)
        });
        
        camera.position.z = 5;
        
        const animate = () => {
            controls.update()
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        };
        
        const handleWindowResize = () => {
            camera.updateProjectionMatrix();
            camera.aspect = window.innerWidth / window.innerHeight;
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        
        
        window.addEventListener('resize', handleWindowResize);
        animate();
      }, []);



  return (
    <div ref={mountRef}>ArtworkSceneFunc</div>
  )
}

export default ArtworkSceneFunc
