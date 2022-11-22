import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import * as lilGui from "lil-gui"


gsap.registerPlugin(ScrollTrigger);

class ScrollBasedScene extends Component {
    componentDidMount(){

        const parameters = {
            color: 0x44bb22
        }

    //scene
        this.scene = new THREE.Scene();
        this.loader = new GLTFLoader()
        this.gui = new lilGui.GUI({closed: true, width: 400});

    // lights
        this.directLight = new THREE.DirectionalLight('#fff', 4)
        this.directLight.position.set(5, 8, 0)
        // this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        // this.light2 = new THREE.PointLight(0xffffff , 10)
        this.light3 = new THREE.AmbientLight(0xffffff, 10)
        // this.directLight.position.set(5, 5, 10)
        this.scene.add(this.ligth3, this.directLight)


    //shapes
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

    // model loading
        let modelGroup = new THREE.Group();
        let glbModel = new THREE.Object3D();
        this.loader.load('/models/LizardHead2.glb', (model) => {
            glbModel = model.scene
            glbModel.scale.set(0.01, 0.01, 0.01)
            glbModel.position.set(1.03, 0.15, 2.2)
            glbModel.rotation.set(-5.88, -0.92, 0.12)
            modelGroup.add(glbModel)
            console.log('glb group', modelGroup)
            this.gui.add(glbModel.position, 'z').min(-10).max(10).step(0.01).name('Z-position')
            this.gui.add(glbModel.position, 'x').min(-10).max(10).step(0.01).name('X-position')
            this.gui.add(glbModel.position, 'y').min(-10).max(10).step(0.01).name('y-position')
            this.gui.add(glbModel.rotation, 'z').min(-10).max(10).step(0.01).name('z-rotation')
            this.gui.add(glbModel.rotation, 'x').min(-10).max(10).step(0.01).name('x-rotation')
            this.gui.add(glbModel.rotation, 'y').min(-10).max(10).step(0.01).name('y-rotation')
            this.scene.add(glbModel);
            scrollAnimation()
        })
        this.loader.load('/models/low_poly_mountain.glb', (model) => {
            glbModel = model.scene
            glbModel.scale.set(0.005, 0.005, 0.005)
            // glbModel.position.set(1.03, 0.15, 2.2)
            // glbModel.rotation.set(-5.88, -0.92, 0.12)
            modelGroup.add(glbModel)
            this.scene.add(glbModel);
            scrollAnimation() // needs to be called on the group
        })

    // gui/debug
        this.gui.add(this.cube.position, 'x').min(-5).max(5).step(0.1);
        this.gui.add(this.cube.position, 'y').min(-5).max(5).step(0.1);
        this.gui.add(this.cube.position, 'z').min(-5).max(5).step(0.1);
        this.gui.add(this.cube, 'visible');
        this.gui.addColor(parameters, 'color').onChange(()=> {
            material.color.set(parameters.color)
        })

    //camera
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 6)
        // this.camera.position.z = 5;

        // focusing the camera at object
        let cameraTarget = this.cube.position
        this.camera.lookAt(cameraTarget)
       
    //scale
        this.cube.scale.x = 0.5
        this.cube.scale.y = 0.7
        this.cube.scale.z = 0.1

    //scroll
        let scrollY = window.scrollY
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

        
        this.animation();
        this.renderer.render(this.scene, this.camera);


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
            timeline.to(glbModel.rotation, {y: 5})
            timeline.to(glbModel.position, {z: 4, y: 2})

            // timeline animations list
                //load models
                //zoom and rotate inwards on group
                // create vector draw line?
                //scale and translate low poly model up from ground
                // scale video box sideways and into view
        }

    //event listeners
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation= ()=> {
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y +=0.01;
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