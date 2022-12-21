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
        // this.gui = new lilGui.GUI();
        const loadedItems = []

    // lights
        this.directLight = new THREE.DirectionalLight('#fff', 3)
        this.directLight.position.set(50, -50, 25)
        this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        // this.gui.add(this.directLight.position, 'x').min(-100).max(100).step(0.5).name('light-x-position')
        // this.gui.add(this.directLight.position, 'y').min(-100).max(100).step(0.5).name('light-y-position')
        // this.gui.add(this.directLight.position, 'z').min(-100).max(100).step(0.5).name('light-Z-position')
        this.ambientLight = new THREE.AmbientLight(0xffffff, 3)
        this.ambientLight.position.set(50, 50, 50)
        this.scene.add(this.ambientLight)

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
        videoMaterial.needsUpdate = true;
        videoTexture.needsUpdate = true;

        const videoGeometry = new THREE.PlaneGeometry(0.01, 0.0077)
        let screen = new THREE.Mesh(videoGeometry, videoMaterial)
        screen.position.set(2, 5, -0.6)
        screen.rotation.set(0, 0.3,  -0.1)
        this.scene.add(screen)

    // model loading
        let gpsBlock = new THREE.Object3D();
        let modelGroup = new THREE.Group();
        this.loader.load('/models/noddleHead.glb', (model) => {
            gpsBlock = model.scene
            gpsBlock.scale.set(0.005, 0.005, 0.005)
            gpsBlock.position.set(0, 0, 0)
            modelGroup.add(gpsBlock)
            // console.log('glb group', modelGroup)
            // this.gui.add(gpsBlock.position, 'z').min(-10).max(10).step(0.01).name('Z-position')
            // this.gui.add(gpsBlock.position, 'x').min(-10).max(10).step(0.01).name('X-position')
            // this.gui.add(gpsBlock.position, 'y').min(-10).max(10).step(0.01).name('y-position')
            // this.gui.add(gpsBlock.rotation, 'z').min(-10).max(10).step(0.01).name('z-rotation')
            // this.gui.add(gpsBlock.rotation, 'x').min(-10).max(10).step(0.01).name('x-rotation')
            // this.gui.add(gpsBlock.rotation, 'y').min(-10).max(10).step(0.01).name('y-rotation')
        })
        let lowPolyMtn = new THREE.Object3D();
        this.loader.load('/models/low_poly_mountain.glb', (model) => {
            lowPolyMtn = model.scene
            lowPolyMtn.scale.set(0.006, 0.006, 0.006)
            lowPolyMtn.position.set(-3.4, 10, -2.6)
            modelGroup.add(lowPolyMtn)
            scrollAnimation() 
        })
        let mapPin = new THREE.Object3D();
        this.loader.load('/models/mapPin.glb', (model) => {
            mapPin = model.scene
            mapPin.scale.set(0.015, 0.015, 0.015)
            mapPin.position.set(3.6, 11.6, -1)
            modelGroup.add(mapPin)
        })
        let hikePath = new THREE.Object3D();
        this.loader.load('/models/hikePath.glb', (model) => {
            hikePath = model.scene
            hikePath.scale.set(0.005, 0.005, 0.005)
            hikePath.position.set(0, -0.1, 0)
            modelGroup.add(hikePath)
            scrollAnimation() //gsap hook
        })
        this.scene.add(modelGroup);

    //camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.set(20, 30, 30)
        let cameraTarget = screen.position
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
                    duration: 5,
                    ease: 'power2.inOut'
                },
                scrollTrigger: {
                    trigger: ".scrol-text-container",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 0.1
                }
            })
            timeline.to(this.camera.position, {x: 10, y: 18, z: 20})
            timeline.to(this.camera.position, {x: 0, y: 14, z: 5})
            timeline.to(
                modelGroup.rotation, {y: -2.2},
                this.camera.position, {z: 4, y: 2}//this does something odd
                )    
            timeline.to(this.camera.position, {x: 3, y: 13, z: 6})
            timeline.to(hikePath.position, {y: 0.01})
            timeline.to(this.camera.rotation, {x: 0, y: 0.3, z: -0.1})
            timeline.to(lowPolyMtn.position, {y: 11.8})
            timeline.to(lowPolyMtn.scale, {y: 0.008})
            timeline.to(screen.position, {x: 1.4, y: 13, z: 0})
            timeline.to(screen.scale, {x: 530, y: 397.5})
        }
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