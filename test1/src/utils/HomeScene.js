import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { TransformControls } from "three/examples/jsm/controls/TransformControls"
import gsap from 'gsap'
import Stats from 'stats.js'
import { sRGBEncoding } from "three"


export default class HomepageScene extends Component {
    componentDidMount(){
    // scene
        this.scene = new THREE.Scene()
        const manager = new THREE.LoadingManager()
        this.loader = new GLTFLoader(manager)
        const loadingBar = document.querySelector('.center')
        // this.gui = new lilGui.GUI({closed: true, width: 0})
        this.clock = new THREE.Clock();
        this.delta = 0;
        this.interval = 1 / 30; // 30 fps

    //overlay intro
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

    // lights
        this.directLight = new THREE.DirectionalLight(0xeeeeee, 1.5)
        this.directLight.position.set(10, 60, 40)
        this.directLight2 = new THREE.DirectionalLight(0xffffff , 1.5)
        this.directLight2.position.set(10, 50, -40)
        this.light3 = new THREE.PointLight(0x99aacc, 2)
        this.light3.position.set(10, 10, 10)
        this.scene.add(this.directLight, this.directLight2)

    // helpers
        // const axesHelper = new THREE.AxesHelper()
        // const directLightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        // const LightHelper2 = new THREE.DirectionalLightHelper(this.directLight2, 2)
        // const pointLightHelper = new THREE.PointLightHelper(this.light3, 5)
        // this.scene.add(directLightHelper, LightHelper2, pointLightHelper)

    // model loading
        this.loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes')) //brushes folder has shader files also
        this.loader.load('/models/materialTest.glb', (model) => {
            // console.log('model', model)
            model.scene.scale.set(9, 9, 9)
            model.scene.position.set(0, -5, 0)
            this.scene.add(model.scene)
        });

    //envirionment map
        this.envTexture = new THREE.CubeTextureLoader()
        const envBackground = this.envTexture.load([
            '/extras/background/snow/px.png',  //px
            '/extras/background/snow/nx.png',  //py
            '/extras/background/snow/py.png',  //nx
            '/extras/background/snow/ny.png',  //ny 
            '/extras/background/snow/pz.png',  //pz
            '/extras/background/snow/nz.png'   //nz
        ])
        envBackground.encoding = THREE.sRGBEncoding
        this.scene.background = envBackground

    // Loading manager
        manager.onStart = ()=> {
            // console.log('started')
        }
        manager.onLoad = ()=> {
            if(loadingBar){
                gsap.delayedCall(0.5, () => {
                    // console.log('loaded')
                    gsap.to(overlayMaterial.uniforms.uAlpha, {duration: 2, value: 0})
                    loadingBar.classList.add('ended')
                    loadingBar.style.transform = ''
                })
            }
            this.update()
        }
        manager.onProgress = (itemUrl, itemsLoaded, itemsTotal)=> {
            // console.log(itemUrl, itemsLoaded, itemsTotal)
        }
        manager.onError = ()=> {
            console.warn('Error on loading manager')
        }
        
    // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.set(8, 30, 90)
        // this.camera.lookAt(this.cube.position)

    //stats
        const stats = new Stats() 
        stats.showPanel( 0 ) // 0: fps, 1: ms, 2: mb, 3+: custom
        // document.getElementById('canvas').appendChild(stats.dom); 
        // document.body.appendChild( stats.dom );

    // render
        this.renderer = new THREE.WebGLRenderer({
            powerPreference: "high-performance",
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.outputEncoding = sRGBEncoding;
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

    //controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableZoom = false
        this.controls.enablePan = false
        this.controls.autoRotate = true
        this.controls.autoRotateSpeed = 1.8
        this.controls.maxPolarAngle = 1.4

        function render() {
            this.renderer.render(this.scene, this.camera)
        }

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

    update = () => {
        requestAnimationFrame(this.update);
        this.delta += this.clock.getDelta();
      
         if (this.delta  > this.interval) {
            this.renderer.render(this.scene, this.camera)
            this.controls.update()
            this.delta = this.delta % this.interval;
         }
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
