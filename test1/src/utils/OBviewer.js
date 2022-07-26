import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"




class OpenBrushScene extends Component {
    componentDidMount(){

    // scene
        this.scene = new THREE.Scene()
        this.loader = new GLTFLoader()
        this.gui = new lilGui.GUI({closed: true, width: 400})

    // light
        this.light = new THREE.DirectionalLight(0xffffff, 100)
        this.light2 = new THREE.PointLight(0xfff, 5)
        this.light3 = new THREE.AmbientLight(0xffffff, 20)
        // this.light.position.set(10, 50, 10)
        this.scene.add(this.light3)

    // model loading
        this.loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../brushes'))
        this.loader.load('/models/circuitArm.glb', (model) => {
            console.log(model)
            this.scene.add(model.scene)
        });


    // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = 1.2;
        this.camera.position.y = 3;
        this.camera.position.x = 0.8;


    // render
        this.renderer = new THREE.WebGL1Renderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

    // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    //animation
        this.animation()
        // this.groupAnimation()
        //event listeners
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation = ()=> {
        requestAnimationFrame(this.animation);
        this.renderer.render(this.scene, this.camera);
    }

    handleWindowResize = ()=> {
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

export default OpenBrushScene;