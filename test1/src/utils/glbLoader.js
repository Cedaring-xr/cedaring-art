import React, { Component } from "react";
import * as THREE from 'three';
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'



class OpenBrushScene extends Component {
    componentDidMount(){

        //scene
        this.scene = new THREE.Scene();
        this.loader = new GLTFLoader();
        
        //camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;

        //light
        this.light = new THREE.DirectionalLight(0xffffff, 1)
        this.light.position.set(2, 2, 5)
        this.scene.add(this.light);

        //test cube
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        // model loading
        this.loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../brushes'));
        this.loader.load('/models/pinata.glb', (model) => {
            this.scene.add(model.scene);
        });


        this.renderer = new THREE.WebGL1Renderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)

        
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