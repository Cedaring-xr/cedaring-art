import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'

class OpenBrushHomeScene extends Component {
    componentDidMount() {
    // scene
        this.scene = new THREE.Scene()
        const gltfLoader = new GLTFLoader()
        const manager = new THREE.LoadingManager()
        // this.gui = new lilGui.GUI({closed: true, width: 400})

    // light
        this.light = new THREE.DirectionalLight(0xffffff, 2)
        this.light2 = new THREE.PointLight(0xffffff, 3)
        this.light3 = new THREE.AmbientLight(0xffffff, 1)
        this.light.position.set(10, 50, 10)
        this.light2.position.set(0, 3, 3)
        this.scene.add(this.light2)

    // Loading manager
        manager.onStart = () => {
            // console.log('started')
        }
        manager.onProgress = (itemUrl, itemsLoaded, itemsTotal) => {
            // console.log(itemUrl, itemsLoaded, itemsTotal)
        }
        manager.onLoad = () => {
            //gsap animation
            gsap.delayedCall(0.5, () => {
                // console.log('loaded')
                
            })
        loadingAnimation()
        }
        manager.onError = () => {
            console.log('Error on loading manager')
        }

    // model loading
        let glbModel = new THREE.Object3D()
        gltfLoader.register(
            (parser) =>
                new GLTFGoogleTiltBrushMaterialExtension(
                    parser,
                    '../extras/brushes'
                )
        ) //brushes folder has shader files also
        gltfLoader.load('/models/phyllotaxis.glb', (model) => {
            glbModel = model.scene
            glbModel.position.set(0,0,0)
            this.scene.add(glbModel)
        })

        

    // camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.camera.position.z = 0.8
        this.camera.position.y = 0.5
        this.camera.position.x = 0
        this.camera.lookAt(glbModel)

    // render
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

        const animation = () => {
            this.controls.update()
            // rotation
            glbModel.rotation.y += -0.03
            this.renderer.render(this.scene, this.camera)
            window.requestAnimationFrame(animation)
        }

        const loadingAnimation = () => {
            console.log('loading animation')
        }

    // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enablePan = false
        this.controls.enableZoom = false

    //animation
        animation()
        // object animation
        window.addEventListener('resize', this.handleWindowResize)
    }

    handleWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div className='object-model-scene'
                ref={(mount) => {
                    this.mount = mount
                }}
            />
        )
    }
}

export default OpenBrushHomeScene
