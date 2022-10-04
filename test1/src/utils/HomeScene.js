import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { TransformControls } from "three/examples/jsm/controls/TransformControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"
import Stats from 'stats.js'





export default class HomepageScene extends Component {
    componentDidMount(){
        const parameters = {
            color: 0x44bb22
        }

    // scene
        this.scene = new THREE.Scene()
        const manager = new THREE.LoadingManager()
        this.loader = new GLTFLoader(manager)
        const loadingBar = document.querySelector('.center')
        this.gui = new lilGui.GUI({closed: true, width: 400})

    // lights
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


        this.loader.load('/models/burger.glb', (model) => {
            console.log(model.scene)
            this.modelObj = model.scene
            this.scene.add(model.scene)
        }, undefined, function ( error ) {
            console.log(error)
        });

    // Loading manager
        // Loading manager
        manager.onStart = ()=> {
            console.log('started')
        }
        manager.onLoad = ()=> {
            if(loadingBar){
                gsap.delayedCall(0.5, () => {
                    console.log('loaded')
                    loadingBar.classList.add('ended')
                    loadingBar.style.transform = ''
                })
            }
            this.animation()
        }
        manager.onProgress = (itemUrl, itemsLoaded, itemsTotal)=> {
            console.log(itemUrl, itemsLoaded, itemsTotal)
        }
        manager.onError = ()=> {
            console.log('Error on loading manager')
        }
        

        // axis helper to mark center point
        const axesHelper = new THREE.AxesHelper()
        this.scene.add(axesHelper)


    // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.z = -10
        this.camera.position.y = 3
        this.camera.position.x = -5
        // this.camera.lookAt(this.cube.position)


    //raycaster
        const raycaster = new THREE.Raycaster()
        const rayOrigin = new THREE.Vector3(-10, 3, -5)
        const rayDirection = new THREE.Vector3(0, 10, 0) // needs to match camera since camera doesn't move
        rayDirection.normalize() //reduce vector 3 length to 1 but keep directions
        raycaster.set(rayOrigin, rayDirection)
        // const intersects = raycaster.intersectObject([this.modelObj])

    //stats
        const stats = new Stats()
        stats.showPanel( 0 ) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( stats.dom );

    // render
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        // re-run renderer for updates to the scene
        this.renderer.render(this.scene, this.camera)

    //controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableZoom = false
        this.transform = new TransformControls(this.camera, this.renderer.domElement)
        this.transform.addEventListener('change', render)

        function render() {
            this.renderer.render(this.scene, this.camera)
        }

    // test canvas resize
        // var container = this.renderer.domElement.parentElement;
        // container.addEventListener('resize', onContainerResize);

        // function onContainerResize() {
        //     var box = container.getBoundingClientRect();
        //     this.renderer.setSize(box.width, box.height);

        //     this.camera.aspect = box.width/box.height
        //     this.camera.updateProjectionMatrix()
        // }
        

    //event listeners
        window.addEventListener('resize', this.handleWindowResize)

        function monitorStats() {
            stats.begin();
            // monitored code goes here
            stats.end();
            
            requestAnimationFrame( monitorStats );
        }
        requestAnimationFrame( monitorStats );

    }

    animation = () => {
        requestAnimationFrame(this.animation)
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.modelObj.rotation.y += 137.5 * (Math.PI / 180)
        this.renderer.render(this.scene, this.camera)
    }

    handleWindowResize = () => {
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
