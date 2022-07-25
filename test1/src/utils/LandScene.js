import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"

export default class LandScene extends Component {
    componentDidMount(){

    // scene
        this.scene = new THREE.Scene()
        const manager = new THREE.LoadingManager()
        this.loader = new GLTFLoader(manager)
        const loadingBar = document.querySelector('.canvas-loading-bar')
        this.gui = new lilGui.GUI({closed: false, width: 400})

    // lights
        this.directLight = new THREE.DirectionalLight('#fff', 5)
        this.directLight.position.set(0.25, 3, -2.25)
        // this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        // this.light2 = new THREE.PointLight(0xffffff , 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 10)
        // this.directLight.position.set(5, 5, 10)
        this.scene.add(this.ligth3, this.directLight)

    // Loading manager
        manager.onStart = ()=> {
            console.log('started')
        }
        manager.onLoad = ()=> {
            gsap.delayedCall(0.5, () => {
                console.log('loaded')
                gsap.to(overlayMaterial.uniforms.uAlpha, {duration: 2, value: 0})
                loadingBar.classList.add('ended')
                loadingBar.style.transform = ''
            })
        }
        manager.onProgress = (itemUrl, itemsLoaded, itemsTotal)=> {
            console.log(itemUrl, itemsLoaded, itemsTotal)
            const progressRatio = itemsLoaded / itemsTotal
            loadingBar.style.transform = `scaleX(${progressRatio})`

        }
        manager.onError = ()=> {
            console.log('Error on loading manager')
        }

    // update materials
        const updateAllMaterials = () => {
            this.scene.traverse((child) => {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.envMap = debugObject.envMapIntensity
                }
            })
        }

    //overlay
        const overlayGeometry = new THREE.PlaneBufferGeometry(2,2,1,1)
        const overlayMaterial = new THREE.ShaderMaterial({
            transparent: true,
            uniforms:
            {
                uAlpha: { value: 0.9 }
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

    // model loading
        let glbModel = new THREE.Object3D();
        const colorado = this.loader.load('/models/colorado.glb', (model) => {
            console.log(model)
            glbModel = model.scene
            glbModel.scale.set(0.1, 0.1, 0.1)
            this.scene.add(glbModel)
            this.gui.add(glbModel.rotation, 'y').min(-Math.PI).max(Math.PI).step(0.01).name('Y-rotation')
            updateAllMaterials()
        })

        const mountains = this.loader.load('/models/LizardHead2.glb', (model) => {
            console.log(model)
            glbModel = model.scene
            glbModel.scale.set(0.01, 0.01, 0.01)
            glbModel.position.y = 0.80
            glbModel.position.x = -28
            glbModel.position.z = 17
            this.gui.add(glbModel.position, 'z').min(-40).max(40).step(0.01).name('Z-position')
            this.gui.add(glbModel.position, 'x').min(-40).max(40).step(0.01).name('X-position')
            this.scene.add(glbModel);
            updateAllMaterials()
        })

    // debug gui
        const debugObject = {}
        debugObject.envMapIntensity = 5
        this.gui.add(this.light3, 'intensity').min(0).max(100).step(0.5)
        this.gui.add(this.directLight.position, 'x').min(-5).max(5).step(0.01).name('LightX')
        this.gui.add(this.directLight.position, 'y').min(-5).max(5).step(0.01).name('LightY')
        this.gui.add(this.directLight.position, 'z').min(-5).max(5).step(0.01).name('LightZ')
        this.gui.add(debugObject, 'envMapIntensity').min(0).max(10).step(0.01).name('envMapIntensity').onChange(updateAllMaterials)
    

    // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.z = 30
        this.camera.position.y = 14
        this.camera.position.x = -6
        // this.camera.lookAt(this.cube.position)

     //envirionment map
        this.envTexture = new THREE.CubeTextureLoader()
        const envBackground = this.envTexture.load([
            '/extras/background/px.png',  //px
            '/extras/background/nx.png',  //py
            '/extras/background/py.png',  //nx
            '/extras/background/ny.png',  //ny
            '/extras/background/pz.png',  //pz
            '/extras/background/nz.png'   //nz
        ])
        envBackground.encoding = THREE.sRGBEncoding
        this.scene.background = envBackground



    // renderer
        this.renderer = new THREE.WebGL1Renderer({alpha: true})
        this.renderer.setClearColor(0xfff, 0)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.physicallyCorrectLights = true
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.mount.appendChild(this.renderer.domElement)
        // re-run renderer for updates to the scene
        this.renderer.render(this.scene, this.camera)

        // controls
        const sceneControls = new OrbitControls(this.camera, this.renderer.domElement)
        sceneControls.enableZoom = false

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
