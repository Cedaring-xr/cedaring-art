import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"





export default class HomepageScene extends Component {
    componentDidMount(){
        const parameters = {
            color: 0x44bb22
        }

        // scene
        this.scene = new THREE.Scene();
        this.loader = new GLTFLoader();
        this.gui = new lilGui.GUI({closed: true, width: 400});

        // light
        this.directLight = new THREE.DirectionalLight(0xffffff, 5)
        this.lightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        this.light2 = new THREE.PointLight(0xffffff , 10)
        this.light3 = new THREE.AmbientLight(0xff00ff, 5)
        this.directLight.position.set(5, 5, 10)
        this.scene.add(this.directLight, this.light2, this.light3)

        // test cube
        const geometry = new THREE.BoxGeometry(1,1,1)
        const geoPlane = new THREE.PlaneGeometry(5,5)
        const material = new THREE.MeshBasicMaterial({color: 0xfffeee, side: THREE.DoubleSide})
        const material2 = new THREE.MeshBasicMaterial({color: parameters.color})
        this.cube = new THREE.Mesh(geometry, material2)
        this.plane = new THREE.Mesh(geoPlane, material)

        this.scene.add(this.cube, this.plane)
        this.plane.rotation.x = - Math.PI / 2
    
        // this.cube.rotateOnAxis.x = 0.5

        this.loader.load('/models/burger.glb', (model) => {
            console.log(model)
            this.scene.add(model.scene)
        });


        // axis helper to mark center point
        const axesHelper = new THREE.AxesHelper()
        this.scene.add(axesHelper)

        //loading manager
        const loadingManager = new THREE.LoadingManager()
        loadingManager.onStart = ()=> {
            //updates for loading progress bar
            console.log('loading start')
        }
        loadingManager.onLoad = ()=> {
            console.log('loading end')
        }
        loadingManager.onProgress = ()=> {
            
        }
        loadingManager.onError = ()=> {
            
        }

        // debug gui
        // this.gui.add(this.cube.position, 'x').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube.position, 'y').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube.position, 'z').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube, 'visible')
        // this.gui.addColor(parameters, 'color').onChange(()=> {
        //     material.color.set(parameters.color)
        // })
        // this.gui.add(this.directLight, 'intensity').min(0).max(10).step(0.1)
        // this.gui.add(this.lightHelper, 'visible')
        // this.gui.add(this.text, 'visible');  //visible is not a property of text


        // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.z = -10
        this.camera.position.y = 3
        this.camera.position.x = -5
        // this.camera.lookAt(this.cube.position)

    // render
        this.renderer = new THREE.WebGL1Renderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        // re-run renderer for updates to the scene
        this.renderer.render(this.scene, this.camera)

         //controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableZoom = false
        

        //animation
        this.animation()
        // this.groupAnimation()
        this.renderer.render(this.scene, this.camera)

        //event listeners
        window.addEventListener('resize', this.handleWindowResize)

        
    }

    animation= ()=> {
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y +=0.01;
        this.renderer.render(this.scene, this.camera);
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
