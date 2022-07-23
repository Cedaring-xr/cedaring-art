import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap';
import * as lilGui from "lil-gui"

export default class LandScene extends Component {
    componentDidMount(){

        // scene
        this.scene = new THREE.Scene()
        this.loadingManager = new THREE.LoadingManager(
            // Loaded
            () => {
                console.log('loaded')
                gsap.to(overlayMaterial.uniforms.uAlpha, {duration: 2, value: 0})
            },
            // Progress
            () => {
                console.log('progress')
            }
        )
        this.loader = new GLTFLoader()
        this.gui = new lilGui.GUI({closed: false, width: 400})

        // light
        this.directLight = new THREE.DirectionalLight('#fff', 5)
        this.directLight.position.set(0.25, 3, -2.25)
        // this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        // this.light2 = new THREE.PointLight(0xffffff , 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 10)
        this.directLight.position.set(5, 5, 10)
        this.scene.add(this.ligth3, this.directLight);

        //overlay
        const overlayGeometry = new THREE.PlaneBufferGeometry(2,2,1,1)
        const overlayMaterial = new THREE.ShaderMaterial({
            transparent: true,
            uniforms:
            {
                uAlpha: { value: 1 }
            },
            vertexShader: `
                void main()
                {
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uAlpha;
                void main()
                {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
                }
            `
        })
        const overlayIntro = new THREE.Mesh(overlayGeometry, overlayMaterial)
        this.scene.add(overlayIntro)

        // axis helper to mark center point
        const axesHelper = new THREE.AxesHelper()
        this.scene.add(axesHelper)

        //Colorado model loading
        const colorado = this.loader.load('/models/colorado.glb', (model) => {
            console.log(model)
            example = model
            model.scene.scale.set(0.1, 0.1, 0.1)
            this.scene.add(example.scene);
            this.gui.add(example.scene.rotation, 'y').min(-Math.PI).max(Math.PI).step(0.01).name('Y-rotation')
        });

        // model loading
        let example = new THREE.Object3D();
        const mountains = this.loader.load('/models/LizardHead2.glb', (model) => {
            console.log(model)
            example = model
            model.scene.scale.set(0.01, 0.01, 0.01)
            model.scene.position.y = 0.80
            model.scene.position.x = -28
            model.scene.position.z = 17
            this.gui.add(example.scene.position, 'z').min(-40).max(40).step(0.01).name('Z-position')
            this.gui.add(example.scene.position, 'x').min(-40).max(40).step(0.01).name('X-position')
            this.scene.add(example.scene);
        });

        // debug gui
        this.gui.add(this.light3, 'intensity').min(0).max(100).step(0.5)
        this.gui.add(this.directLight.position, 'x').min(-5).max(5).step(0.01).name('LightX')
        this.gui.add(this.directLight.position, 'y').min(-5).max(5).step(0.01).name('LightY')
        this.gui.add(this.directLight.position, 'z').min(-5).max(5).step(0.01).name('LightZ')
        

        // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.z = -4
        this.camera.position.y = 3
        this.camera.position.x = 1
        // this.camera.lookAt(this.cube.position)

        //envirionment map
        this.envTexture = new THREE.CubeTextureLoader();
        const envBackground = this.envTexture.load([
            '/extras/background/px.png',  //px
            '/extras/background/nx.png',  //py
            '/extras/background/py.png',  //nx
            '/extras/background/ny.png',  //ny
            '/extras/background/pz.png',  //pz
            '/extras/background/nz.png'   //nz
        ])
        this.scene.background = envBackground

        //loading manager


        // render
        this.renderer = new THREE.WebGL1Renderer({alpha: true})
        this.renderer.setClearColor(0xfff, 0)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.physicallyCorrectLights = true
        this.mount.appendChild(this.renderer.domElement)
        // re-run renderer for updates to the scene
        this.renderer.render(this.scene, this.camera)

         // controls
        this.comtrols = new OrbitControls(this.camera, this.renderer.domElement)

        //animation
        this.animation()
        // this.groupAnimation();
        this.renderer.render(this.scene, this.camera)

        //event listeners
        window.addEventListener('resize', this.handleWindowResize)
    }

    animation= ()=> {
        requestAnimationFrame(this.animation)
        this.renderer.render(this.scene, this.camera)
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
