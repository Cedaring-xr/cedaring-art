import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import * as lilGui from "lil-gui"


gsap.registerPlugin(ScrollTrigger);

class ScrollBasedScene extends Component {
    componentDidMount(){


    //scene
        this.scene = new THREE.Scene();
        this.loader = new GLTFLoader()
        this.gui = new lilGui.GUI();

    // lights
        this.directLight = new THREE.DirectionalLight('#fff', 4)
        this.directLight.position.set(50, -50, 0)
        this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        this.gui.add(this.directLight.position, 'x').min(-50).max(50).step(0.2).name('light-x-position')
        this.gui.add(this.directLight.position, 'y').min(-50).max(50).step(0.2).name('light-y-position')
        this.gui.add(this.directLight.position, 'z').min(-50).max(50).step(0.2).name('light-Z-position')
        // this.light2 = new THREE.PointLight(0xffffff , 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 10)
        this.light3.position.set(50, 50, 50)
        this.scene.add(this.ligth3, this.directLight)

    //shapes
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        this.cube.scale.set(0.1, 0.1, 0.1)

    // video
        const video = document.getElementById("summit1-video")
        const videoTexture = new THREE.VideoTexture(video)
        videoTexture.minFilter = THREE.LinearFilter
        videoTexture.magFilter = THREE.LinearFilter

        const videoMaterial = new THREE.MeshBasicMaterial({
            map: videoTexture,
            side: THREE.FrontSide,
            toneMapped: false,
        })

        const videoGeometry = new THREE.PlaneGeometry(10, 10)
        let screen = new THREE.Mesh(videoGeometry, videoMaterial)
        screen.position.set(0, 50, 0)
        this.scene.add(screen)

    // model loading
        let modelGroup = new THREE.Group();
        let glbModel = new THREE.Object3D();
        this.loader.load('/models/noddleHead.glb', (model) => {
            glbModel = model.scene
            glbModel.scale.set(0.005, 0.005, 0.005)
            glbModel.position.set(0.5, -10, -15)
            glbModel.rotation.set(-5.88, -0.92, 0.12)
            modelGroup.add(glbModel)
            console.log('glb group', modelGroup)
            this.gui.add(glbModel.position, 'z').min(-10).max(10).step(0.01).name('Z-position')
            this.gui.add(glbModel.position, 'x').min(-10).max(10).step(0.01).name('X-position')
            this.gui.add(glbModel.position, 'y').min(-10).max(10).step(0.01).name('y-position')
            this.gui.add(glbModel.rotation, 'z').min(-10).max(10).step(0.01).name('z-rotation')
            this.gui.add(glbModel.rotation, 'x').min(-10).max(10).step(0.01).name('x-rotation')
            this.gui.add(glbModel.rotation, 'y').min(-10).max(10).step(0.01).name('y-rotation')
        })
        this.loader.load('/models/low_poly_mountain.glb', (model) => {
            glbModel = model.scene
            glbModel.scale.set(0.01, 0.01, 0.01)
            glbModel.position.set(0, 0, -15)
            glbModel.rotation.set(-5.88, -0.92, 0.12)
            modelGroup.add(glbModel)
            this.scene.add(modelGroup);
            scrollAnimation() 
        })

    //camera
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 10, 20)
        let cameraTarget = this.cube.position
        this.camera.lookAt(cameraTarget)

    //scroll
        let scrollY = null
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY
        })

        //renderer
        this.renderer = new THREE.WebGLRenderer( {alpha: true });
        this.renderer.setClearColor( 0x000000, 0 ); // the default
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)

        const container = document.querySelector('.scroll-scene')
        container.appendChild(this.renderer.domElement)
        window.addEventListener('resize', this.handleWindowResize); 
        this.renderer.render(this.scene, this.camera);
        this.animation();

        //gsap animation
        const scrollAnimation = () => {
            const timeline = gsap.timeline({
                default: {
                    duration: 1,
                    ease: 'power2.inOut'
                },
                scrollTrigger: {
                    trigger: ".canvas-text",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.1
                }
            })
            timeline.to(modelGroup.rotation, {y: 5})
            timeline.to(modelGroup.position, {z: 4, y: 2})
        }

    //event listeners
        
    }

    animation= ()=> {
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y +=0.01;
        // this.videoTexture.needsUpdate = true
        this.renderer.render(this.scene, this.camera);
    }

    handleWindowResize= ()=> {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.render(this.scene, this.camera)
    }

    render(){
        return (
            <div className="scroll-scene"
            ref={mount => {
                this.mount = mount;
            }}
            />
        )
    }
}

export default ScrollBasedScene;