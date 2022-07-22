import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap';
import * as lilGui from "lil-gui"

export default class LandScene extends Component {
    componentDidMount(){

        // scene
        this.scene = new THREE.Scene();
        this.loader = new GLTFLoader();
        this.gui = new lilGui.GUI({closed: true, width: 400});

        // light
        this.directLight = new THREE.DirectionalLight(0xffffff, 1)
        // this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        // this.light2 = new THREE.PointLight(0xffffff , 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 10)
        this.directLight.position.set(5, 5, 10)
        this.scene.add(this.ligth3);

        // axis helper to mark center point
        const axesHelper = new THREE.AxesHelper()
        this.scene.add(axesHelper)

        //test plane
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 5),
            new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide})
        )
        // plane.position.x = 1.2
        // plane.position.y = 1.2
        this.scene.add(plane)

        // model loading
        let example = new THREE.Object3D();
        const mountains = this.loader.load('/models/LizardHead2.glb', (model) => {
            console.log(model)
            example = model
            model.scene.scale.set(0.01, 0.01, 0.01)
            this.scene.add(example.scene);
        });

        // debug gui
        this.gui.add(this.light3, 'intensity').min(0).max(100).step(0.5)


        // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = -3;
        this.camera.position.y = 12;
        this.camera.position.x = 4;
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

        //event listeners
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation= ()=> {
        requestAnimationFrame(this.animation);
        this.renderer.render(this.scene, this.camera);
    }

    handleWindowResize= ()=> {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
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
