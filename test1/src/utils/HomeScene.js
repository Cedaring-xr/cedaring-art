import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { TransformControls } from "three/examples/jsm/controls/TransformControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"
import Stats from 'stats.js'


export default class HomepageScene extends Component {
    componentDidMount(){
    // scene
        this.scene = new THREE.Scene()
        const manager = new THREE.LoadingManager()
        this.loader = new GLTFLoader(manager)
        const loadingBar = document.querySelector('.center')
        // this.gui = new lilGui.GUI({closed: true, width: 0})

    // lights
        this.directLight = new THREE.DirectionalLight(0xffaaff, 3)
        this.light2 = new THREE.PointLight(0xffffff , 2)
        this.light3 = new THREE.AmbientLight(0xf5d058, 0.5)
        this.directLight.position.set(-40, 10, 0)
        this.scene.add(this.directLight, this.light3)

    // helpers
        const axesHelper = new THREE.AxesHelper()
        const directLightHelper = new THREE.DirectionalLightHelper(this.directLight, 5)
        const ambientLightHelper = new THREE.AmbientLightProbe(this.light3, 2)
        this.scene.add(axesHelper, directLightHelper, ambientLightHelper)

    // test cube
        const geoPlane = new THREE.PlaneGeometry(3, 3)
        const material = new THREE.MeshBasicMaterial({color: 0x16844b, side: THREE.DoubleSide})
        this.plane = new THREE.Mesh(geoPlane, material)
        this.plane.position.set(-3, -5, 2)
        this.scene.add(this.plane)
        this.plane.rotation.x = - Math.PI / 2

    //overlay
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


    // model loading
        this.loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes')) //brushes folder has shader files also
        this.loader.load('/models/fallFox.glb', (model) => {
            console.log(model)
            model.scene.scale.set(2.3, 2.3, 2.3)
            model.scene.position.set(0, -5, 0)
            this.scene.add(model.scene)
        });

    //envirionment map
        this.envTexture = new THREE.CubeTextureLoader()
        const envBackground = this.envTexture.load([
            '/extras/background/treePark2/px.png',  //px
            '/extras/background/treePark2/nx.png',  //py
            '/extras/background/treePark2/py.png',  //nx
            '/extras/background/treePark2/ny.png',  //ny
            '/extras/background/treePark2/pz.png',  //pz
            '/extras/background/treePark2/nz.png'   //nz
        ])
        envBackground.encoding = THREE.sRGBEncoding
        this.scene.background = envBackground

    // Loading manager
        manager.onStart = ()=> {
            console.log('started')
        }
        manager.onLoad = ()=> {
            if(loadingBar){
                gsap.delayedCall(0.5, () => {
                    console.log('loaded')
                    gsap.to(overlayMaterial.uniforms.uAlpha, {duration: 2, value: 0})
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
        // stats.showPanel( 0 ) // 0: fps, 1: ms, 2: mb, 3+: custom
        // document.body.appendChild( stats.dom );

    // render
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

    //controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableZoom = false
        this.controls.enablePan = false
        this.transform = new TransformControls(this.camera, this.renderer.domElement)
        this.transform.addEventListener('change', render)

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

    animation = () => {
        requestAnimationFrame(this.animation)
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
