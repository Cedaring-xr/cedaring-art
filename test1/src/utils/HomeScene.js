import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

class HomeScene extends Component {
    componentDidMount() {
        //scene
        this.scene = new THREE.Scene()
        const manager = new THREE.LoadingManager()
        this.loader = new GLTFLoader(manager)
        const loadingBar = document.querySelector('.center-loading')

        //overlay intro
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
                    gl_FragColor = vec4(129, 195, 236, uAlpha);
                }
            `
        })
        const overlayIntro = new THREE.Mesh(overlayGeometry, overlayMaterial)
        this.scene.add(overlayIntro)

        // Loading manager
        manager.onStart = () => {
            // console.log('started')
        }
        manager.onProgress = (itemUrl, itemsLoaded, itemsTotal) => {
            // console.log(itemUrl, itemsLoaded, itemsTotal)
        }
        manager.onLoad = () => {
            if (loadingBar) {
                gsap.delayedCall(0.5, () => {
                    // console.log('loaded')
                    gsap.to(overlayMaterial.uniforms.uAlpha, {
                        duration: 2,
                        value: 0
                    })
                    loadingBar.classList.add('ended')
                    loadingBar.style.transform = ''
                })
            }
            this.animation()
        }
        manager.onError = () => {
            console.log('Error on loading manager')
        }

        // lights
        this.directLight = new THREE.DirectionalLight('#fff', 3)
        this.directLight.position.set(50, -50, 25)
        this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        this.ambientLight = new THREE.AmbientLight(0xffffff, 3)
        this.ambientLight.position.set(50, 50, 50)
        this.scene.add(this.ambientLight)

        //shapes
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.cube.scale.set(0.1, 0.1, 0.1)

        // model loading
        let modelGroup = new THREE.Group()
        let lowPolyMtn = new THREE.Object3D()
        this.loader.load('/models/MountainLowPoly.glb', (model) => {
            lowPolyMtn = model.scene
            lowPolyMtn.scale.set(0.006, 0.006, 0.006)
            lowPolyMtn.position.set(-3.4, 10, -2.6)
            modelGroup.add(lowPolyMtn)
            scrollAnimation()
        })
        let mapPin = new THREE.Object3D()
        this.loader.load('/models/mapPin.glb', (model) => {
            mapPin = model.scene
            mapPin.scale.set(0.015, 0.015, 0.015)
            mapPin.position.set(3.6, 11.6, -1)
            modelGroup.add(mapPin)
        })
        this.scene.add(modelGroup)

        //camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.camera.position.set(20, 30, 30)

        //scroll
        let scrollY = null
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY
        })

        //renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        this.renderer.setClearColor(0x000000, 0)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)

        const container = document.querySelector('.scroll-scene')
        container.appendChild(this.renderer.domElement)
        window.addEventListener('resize', this.handleWindowResize)
        this.renderer.render(this.scene, this.camera)
        this.animation()

        //gsap animation
        const scrollAnimation = () => {
            const timeline = gsap.timeline({
                default: {
                    duration: 5,
                    ease: 'power2.inOut'
                },
                scrollTrigger: {
                    trigger: '.scrol-text-container',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.1
                }
            })
            timeline.to(this.camera.position, { x: 10, y: 18, z: 20 })
            timeline.to(this.camera.position, { x: 0, y: 14, z: 5 })
            timeline.to(
                modelGroup.rotation,
                { y: -2.2 },
                this.camera.position,
                { z: 4, y: 2 }
            )
            timeline.to(this.camera.position, { x: 3, y: 13, z: 6 })
            timeline.to(this.camera.rotation, { x: 0, y: 0.3, z: -0.1 })
            timeline.to(lowPolyMtn.position, { y: 11.8 })
        }
    }

    animation = () => {
        requestAnimationFrame(this.animation)
        // model updates
        this.renderer.render(this.scene, this.camera)
    }

    handleWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div
                className="scroll-scene"
                ref={(mount) => {
                    this.mount = mount
                }}
            />
        )
    }
}

export default HomeScene
