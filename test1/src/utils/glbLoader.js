import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class ModelScene extends Component {
    componentDidMount() {
        const parameters = {
            color: 0x44bb22
        }

        // scene
        this.scene = new THREE.Scene()
        this.loader = new GLTFLoader()
        // this.gui = new lilGui.GUI({closed: true, width: 400})

        // light
        this.light = new THREE.DirectionalLight(0xffffff, 0.5)
        this.light2 = new THREE.AmbientLight(0xffffff, 1)
        this.light.position.set(10, 50, 10)
        this.scene.add(this.light, this.light2)

        // test cube
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({
            color: parameters.color
        })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.cube.rotateOnAxis.x = 0.5

        // model loading
        this.loader.load('/models/ammyBL.glb', (model) => {
            console.log(model)
            this.scene.add(model.scene)
        })

        // gui/debug
        // this.gui.add(this.cube.position, 'x').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube.position, 'y').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube.position, 'z').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube, 'visible');
        // this.gui.addColor(parameters, 'color').onChange(()=> {
        //     material.color.set(parameters.color)
        // })

        // camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.camera.position.z = 1.2
        this.camera.position.y = 3
        this.camera.position.x = 0.8

        // render
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

        // controls
        this.comtrols = new OrbitControls(this.camera, this.renderer.domElement)

        //animation
        this.animation()
        // this.groupAnimation()
        this.renderer.render(this.scene, this.camera)

        //event listeners
        window.addEventListener('resize', this.handleWindowResize)
    }

    animation = () => {
        requestAnimationFrame(this.animation)
        // this.cube.rotation.x +=0.01;
        // this.cube.rotation.y +=0.01;
        this.renderer.render(this.scene, this.camera)
    }

    handleWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div
                ref={(mount) => {
                    this.mount = mount
                }}
            />
        )
    }
}

export default ModelScene
