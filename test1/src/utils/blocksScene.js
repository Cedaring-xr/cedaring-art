import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function blocksScene() {
   
    const scene = new THREE.Scene();
    // const loader = new GLTFLoader();

    // fov, aspect ration, near plane, far plane
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.z = 5;

    // webGL renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true});
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
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(2, 2, 5)
    scene.add(light);

    
    

   
    function animate() {
        requestAnimationFrame(animate)
        renderer.render(scene, camera);
    }
    animate();

}
