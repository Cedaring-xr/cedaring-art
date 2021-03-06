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
        const clock = new THREE.Clock()
        const gltfLoader = new GLTFLoader()
        // this.gui = new lilGui.GUI({closed: true, width: 400})

    // light
        this.light = new THREE.DirectionalLight(0xffffff, 2)
        this.light2 = new THREE.PointLight(0xffffff, 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 1)
        this.light.position.set(10, 50, 10)
        this.scene.add(this.light, this.light3)

    // model loading
        gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../brushes')) //brushes folder has shader files also
        gltfLoader.load('/models/circuitArm.glb', (model) => {
            console.log(model)
            this.scene.add(model.scene)
        });


    // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        this.camera.position.y = 8;
        this.camera.position.x = 6;

    // render
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            // console.log(elapsedTime)
            this.controls.update()
            this.renderer.render(this.scene, this.camera)
            window.requestAnimationFrame(tick);
        }


    // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    //animation
        tick()
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation = ()=> {
        requestAnimationFrame(this.animation);
        this.renderer.render(this.scene, this.camera, this.model);
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

export default OpenBrushScene
