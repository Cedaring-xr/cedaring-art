import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"


class ArtworkScene1 extends Component {

    componentDidMount(){
    // scene
        this.scene = new THREE.Scene()
        this.clock = new THREE.Clock()
        this.scene.background = new THREE.Color(0, 0, 0); //black
    // light
        this.light = new THREE.DirectionalLight(0xffffff, 5)
        this.light2 = new THREE.PointLight(0xffffff, 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 1)
        this.light.position.set(10, 50, 10)
        this.scene.add(this.light, this.light3)
    // model loading
        const gltfLoader = new GLTFLoader()
        gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes')) //brushes folder has shader files also
        gltfLoader.load(this.props.card.model, (model) => {
            // console.log(model)
            // console.log('passing props', this.props)
            this.controls.target.set(0, 0.95, 0)
            this.scene.add(model.scene)
        });
    // camera
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.set(0.2, 3.9, 1.7)
    // render
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
          })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setClearColor(0x000000, 0)
        this.mount.appendChild(this.renderer.domElement)

        const tick = () => {
            this.controls.update()
            this.renderer.render(this.scene, this.camera)
            // this.renderer.setAnimationLoop(this.render.bind(this))
            window.requestAnimationFrame(tick);
        }
        

    // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true //glide effect after grab
    //animation
        window.requestAnimationFrame(tick);
        window.addEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = ()=> {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.updateProjectionMatrix();
    }

    render(){
        return (
            <div className="canvas-test" ref={mount => { this.mount = mount}} />
        )
    }
}

export default ArtworkScene1
