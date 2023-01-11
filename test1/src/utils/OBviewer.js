import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class OpenBrushScene extends Component {
    componentDidMount() {
        // scene
        this.scene = new THREE.Scene()
        const gltfLoader = new GLTFLoader()
        // this.gui = new lilGui.GUI({closed: true, width: 400})

        // light
        this.light = new THREE.DirectionalLight(0xffffff, 5)
        this.light2 = new THREE.PointLight(0xffffff, 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 1)
        this.light.position.set(10, 50, 10)
        this.scene.add(this.light, this.light3)

        // model loading
        gltfLoader.register(
            (parser) =>
                new GLTFGoogleTiltBrushMaterialExtension(
                    parser,
                    '../extras/brushes'
                )
        ) //brushes folder has shader files also
        gltfLoader.load('/models/fallFox.glb', (model) => {
            console.log(model)
            this.scene.add(model.scene)
        })

        //envirionment map
        this.envTexture = new THREE.CubeTextureLoader()
        const envBackground = this.envTexture.load([
            '/extras/background/openSky/px.png', //px
            '/extras/background/openSky/nx.png', //py
            '/extras/background/openSky/py.png', //nx
            '/extras/background/openSky/ny.png', //ny
            '/extras/background/openSky/pz.png', //pz
            '/extras/background/openSky/nz.png' //nz
        ])
        envBackground.encoding = THREE.sRGBEncoding
        this.scene.background = envBackground

        // camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.camera.position.z = 1.7
        this.camera.position.y = 3.9
        this.camera.position.x = 0.2

        // render
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

        const tick = () => {
            // console.log(elapsedTime)
            this.controls.update()
            this.renderer.render(this.scene, this.camera)
            window.requestAnimationFrame(tick)
        }

        // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

        //animation
        tick()
        window.addEventListener('resize', this.handleWindowResize)
    }

    animation = () => {
        requestAnimationFrame(this.animation)
        this.renderer.render(this.scene, this.camera, this.model)
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

export default OpenBrushScene
