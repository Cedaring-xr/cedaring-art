import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
// import * as lilGui from "lil-gui"
// import { Vector3 } from "three"


class ArtworkScene extends Component {

    componentDidMount(){
    // scene
        this.scene = new THREE.Scene()
        this.clock = new THREE.Clock()
        this.scene.background = new THREE.Color(this.props.card.background)
        const manager = new THREE.LoadingManager()
        this.loader = new GLTFLoader(manager)
        const loadingBar = document.querySelector('.center')
        // this.gui = new lilGui.GUI({width: 400})

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

    //loading manager
        manager.onStart = ()=> {
            // console.log('started')
        }
        manager.onProgress = (itemUrl, itemsLoaded, itemsTotal)=> {
            // console.log(itemUrl, itemsLoaded, itemsTotal)
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
        }
        manager.onError = ()=> {
            console.log('Error on loading manager')
        }

    // light
        this.light = new THREE.DirectionalLight(0xffffff, 3)
        this.light2 = new THREE.PointLight(0xffffff, 2)
        this.light3 = new THREE.AmbientLight(0xffffff, 0.1)
        this.light.position.set(-10, 20, 5)
        this.scene.add(this.light, this.light2, this.light3)

        // const directLightHelper = new THREE.DirectionalLightHelper(this.light, 5)
        // this.scene.add(directLightHelper)

    // model loading
        this.loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes')) //brushes folder has shader files also
        this.loader.load(this.props.card.model, (model) => {
            this.scene.add(model.scene)
        });
    // camera
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.setX(this.props.card.threeSettings.camera.x)
        this.camera.position.setY(this.props.card.threeSettings.camera.y)
        this.camera.position.setZ(this.props.card.threeSettings.camera.z)

    // render
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
          })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setClearColor(0x000000, 0)
        this.mount.appendChild(this.renderer.domElement)

        const tick = () => {
            this.controls.update()
            this.renderer.render(this.scene, this.camera)
            // console.log(this.camera.position)
            window.requestAnimationFrame(tick);
        }
        

    // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        // this.controls.enableDamping = true //glide effect after grab
        this.controls.target = new THREE.Vector3(0, 3, 0);
        let x = this.props.card.threeSettings.lookAt[0]
        let y = this.props.card.threeSettings.lookAt[1]
        let z = this.props.card.threeSettings.lookAt[2]
        this.controls.target = new THREE.Vector3(x, y, z);
        this.controls.update();

    //animation
        window.requestAnimationFrame(tick);
        window.addEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = ()=> {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.updateProjectionMatrix();
    }

    render(){
        return (
            <div className="canvas-test" ref={mount => { this.mount = mount}} />
        )
    }
}

export default ArtworkScene
