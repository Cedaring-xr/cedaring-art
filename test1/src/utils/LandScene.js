import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

export default class LandScene extends Component {
    componentDidMount() {
        // scene
        this.scene = new THREE.Scene()
        const manager = new THREE.LoadingManager()
        this.loader = new GLTFLoader(manager)
        const loadingBar = document.querySelector('.center')
        // this.gui = new lilGui.GUI({closed: false, width: 400})

        // lights
        this.directLight = new THREE.DirectionalLight('#fff', 5)
        this.directLight.position.set(0.25, 3, -2.25)
        // this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        // this.light2 = new THREE.PointLight(0xffffff , 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 10)
        // this.directLight.position.set(5, 5, 10)
        this.scene.add(this.ligth3, this.directLight)

        // Loading manager
        manager.onStart = () => {
            console.log('started')
        }
        manager.onLoad = () => {
            if (loadingBar) {
                gsap.delayedCall(0.5, () => {
                    console.log('loaded')
                    gsap.to(overlayMaterial.uniforms.uAlpha, {
                        duration: 2,
                        value: 0
                    })
                    loadingBar.classList.add('ended')
                    loadingBar.style.transform = ''
                })
            }
        }
        manager.onProgress = (itemUrl, itemsLoaded, itemsTotal) => {
            // console.log(itemUrl, itemsLoaded, itemsTotal)
            const progressRatio = itemsLoaded / itemsTotal
            return progressRatio
        }
        manager.onError = () => {
            console.log('Error on loading manager')
        }

        // update materials
        const updateAllMaterials = () => {
            this.scene.traverse((child) => {
                if (
                    child instanceof THREE.Mesh &&
                    child.material instanceof THREE.MeshStandardMaterial
                ) {
                    child.material.envMap = debugObject.envMapIntensity
                }
            })
        }

        //overlay
        const overlayGeometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)
        const overlayMaterial = new THREE.ShaderMaterial({
            transparent: true,
            uniforms: {
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

        // center axis helper
        const axesHelper = new THREE.AxesHelper()
        this.scene.add(axesHelper)

        // model loading
        let glbModel
        this.loader.load('/models/colorado.glb', (model) => {
            console.log(model)
            glbModel = model.scene
            glbModel.scale.set(0.1, 0.1, 0.1)
            this.scene.add(glbModel)
            // this.gui.add(glbModel.rotation, 'y').min(-Math.PI).max(Math.PI).step(0.01).name('Y-rotation')
            updateAllMaterials()
        })

        this.loader.load('/models/LizardHead2.glb', (model) => {
            console.log(model)
            glbModel = model.scene
            glbModel.scale.set(0.01, 0.01, 0.01)
            glbModel.position.y = 0.8
            glbModel.position.x = -28
            glbModel.position.z = 17
            // this.gui.add(glbModel.position, 'z').min(-40).max(40).step(0.01).name('Z-position')
            // this.gui.add(glbModel.position, 'x').min(-40).max(40).step(0.01).name('X-position')
            this.scene.add(glbModel)
            updateAllMaterials()
        })

        // 3d font loading
        // const coloradoTexture = textureLoader.load('/extras/images/coTexture.png')
        const txtLoader = new FontLoader()
        txtLoader.load(
            '/extras/fonts/helvetiker_regular.typeface.json',
            (font) => {
                const geometryFont = new TextGeometry('COLORADO', {
                    font: font,
                    size: 10,
                    height: 0.1,
                    curveSegments: 5, //poly count
                    bevelEnabled: true,
                    bevelThickness: 0.3,
                    bevelSize: 0.2,
                    bevelOffset: 0,
                    bevelSegments: 5
                })
                geometryFont.computeBoundingBox()
                geometryFont.center()
                // const fontMaterial = new THREE.MeshBasicMaterial({
                //     map: coloradoTexture
                // })
                const textMaterial = new THREE.MeshBasicMaterial({
                    color: 0x666aaa
                })
                this.text = new THREE.Mesh(geometryFont, textMaterial)
                this.scene.add(this.text)
                this.text.position.z = -30
                this.text.position.y = 8
            }
        )

        // debug gui
        const debugObject = {}
        debugObject.envMapIntensity = 5
        // this.gui.add(this.light3, 'intensity').min(0).max(100).step(0.5)
        // this.gui.add(this.directLight.position, 'x').min(-5).max(5).step(0.01).name('LightX')
        // this.gui.add(this.directLight.position, 'y').min(-5).max(5).step(0.01).name('LightY')
        // this.gui.add(this.directLight.position, 'z').min(-5).max(5).step(0.01).name('LightZ')
        // this.gui.add(debugObject, 'envMapIntensity').min(0).max(10).step(0.01).name('envMapIntensity').onChange(updateAllMaterials)

        // camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.camera.position.z = 45
        this.camera.position.y = 18
        this.camera.position.x = 0
        // this.camera.lookAt(this.cube.position)

        //envirionment map
        this.envTexture = new THREE.CubeTextureLoader()
        const envBackground = this.envTexture.load([
            '/extras/background/groundBase/px.png', //px
            '/extras/background/groundBase/nx.png', //py
            '/extras/background/groundBase/py.png', //nx
            '/extras/background/groundBase/ny.png', //ny
            '/extras/background/groundBase/pz.png', //pz
            '/extras/background/groundBase/nz.png' //nz
        ])
        envBackground.encoding = THREE.sRGBEncoding
        this.scene.background = envBackground

        // renderer
        this.renderer = new THREE.WebGL1Renderer({ alpha: true })
        this.renderer.setClearColor(0xfff, 0)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.physicallyCorrectLights = true
        this.renderer.outputEncoding = THREE.sRGBEncoding
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

        // controls
        const sceneControls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        )
        sceneControls.enableZoom = false
        sceneControls.enablePan = false

        //animation
        this.animation()
        // this.groupAnimation();
        this.renderer.render(this.scene, this.camera)

        //event listeners
        window.addEventListener('resize', this.handleWindowResize)
    }

    animation = () => {
        requestAnimationFrame(this.animation)
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
