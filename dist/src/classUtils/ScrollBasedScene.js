import React, { Component } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

class ScrollBasedScene extends Component {
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


        // video
        const video = document.getElementById('summit1-video')
        video.play()

        let videoTexture = new THREE.VideoTexture(video)
        videoTexture.format = THREE.RGBAFormat
        videoTexture.minFilter = THREE.NearestFilter
        videoTexture.magFilter = THREE.NearestFilter

        const videoGeometry = new THREE.PlaneGeometry(0.01, 0.0077)
        const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture })
        let screen = new THREE.Mesh(videoGeometry, videoMaterial)
        screen.position.set(2, 5, -0.6)
        screen.rotation.set(0, 0.3, -0.1)
        this.scene.add(screen)

        // model loading
        let gpsBlock = new THREE.Object3D()
        let modelGroup = new THREE.Group()
        this.loader.load('/models/noddleHead.glb', (model) => {
            gpsBlock = model.scene
            gpsBlock.scale.set(0.005, 0.005, 0.005)
            gpsBlock.position.set(0, 0, 0)
            modelGroup.add(gpsBlock)
        })
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
        let hikePath = new THREE.Object3D()
        this.loader.load('/models/hikePath.glb', (model) => {
            hikePath = model.scene
            hikePath.scale.set(0.005, 0.005, 0.005)
            hikePath.position.set(0, -0.1, 0)
            modelGroup.add(hikePath)
            scrollAnimation() //gsap hook
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
        let cameraTarget = screen.position
        this.camera.lookAt(cameraTarget)

        //scroll
        let scrollY = null
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY
        })

        //renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true })
        this.renderer.setClearColor(0xcae4db, 1)
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
                { z: 4, y: 2 } //this does something odd
            )
            timeline.to(this.camera.position, { x: 3, y: 13, z: 6 })
            timeline.to(hikePath.position, { y: 0.01 })
            timeline.to(this.camera.rotation, { x: 0, y: 0.3, z: -0.1 })
            timeline.to(lowPolyMtn.position, { y: 11.9 })
            timeline.to(screen.position, { x: 1.4, y: 13, z: 0 })
            timeline.to(screen.scale, { x: 530, y: 397.5 })
            timeline.to(screen.scale, { x: 530, y: 397.5 })
        }
    }

    animation = () => {
        requestAnimationFrame(this.animation)
        // this.videoTexture.needsUpdate = true
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

export default ScrollBasedScene
