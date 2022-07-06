import React, { Component } from "react";
import * as THREE from 'three';
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

//animations
import gsap from 'gsap'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";



class OpenBrushScene extends Component {
    componentDidMount(){

        // scene
        this.scene = new THREE.Scene();
        this.loader = new GLTFLoader();

        // light
        this.light = new THREE.DirectionalLight(0xffffff, 1)
        this.light.position.set(10, 10, 10)
        this.scene.add(this.light);

        // test cube
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({
            color: 0xbbaa00
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        this.cube.rotateOnAxis.x = 0.5;

        // model loading
        this.loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../brushes'));
        this.loader.load('/models/cyclos.glb', (model) => {
            this.scene.add(model.scene);
        });

        // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;
        // this.camera.lookAt(this.cube.position)

        // render
        this.renderer = new THREE.WebGL1Renderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        // re-run renderer for updates to the scene
        this.renderer.render(this.scene, this.camera);

         // controls
         this.comtrols = new OrbitControls(this.camera, this.renderer.domElement)

        //animation
        this.animation();
        // this.groupAnimation();
        this.renderer.render(this.scene, this.camera);
    }

    animation= ()=> {
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y +=0.01;
        this.renderer.render(this.scene, this.camera);
    }

    render(){
        return (
            <div
            ref={mount => {
                this.mount = mount;
            }}
            />
        )
    }
}

export default OpenBrushScene;