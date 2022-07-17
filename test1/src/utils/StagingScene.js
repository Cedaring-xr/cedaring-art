import { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default class StagingScene extends Component{
   
    constructor() {



        this.scene = new THREE.Scene();
        // const loader = new GLTFLoader();

        

        // webGL renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true});
        this.renderer.setClearColor('#e5e5e5');
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(this.renderer.domElement);
        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        })


        this.geometry = new THREE.SphereGeometry( 10, 10, 5);
        this.material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);

        this.light = new THREE.DirectionalLight(0xffffff, 1)
        this.light.position.set(2, 2, 5)
        this.scene.add(this.light);

        
        
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate)
        this.renderer.render(this.scene, this.camera);
    }
}
