import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// init();
// const loader = new GLTFLoader();
// const gltfLoader = new GLTFLoader();

export function altScene() {
   
    const scene = new THREE.Scene();

    // fov, aspect ration, near plane, far plane
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.z = 5;

    // webGL renderer
    const renderer = new THREE.WebGL1Renderer({ antialias: true});
    renderer.setClearColor('#e5e5e5');
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })

    const geometry = new THREE.SphereGeometry( 10, 10, 5);
    const material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
    const sphere = new THREE.Mesh(geometry, material);

    renderer.render(scene, camera);
    scene.add(sphere);

   

}
