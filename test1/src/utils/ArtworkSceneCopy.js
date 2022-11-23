// import {
//     WebGLRenderer,
//     PerspectiveCamera,
//     Scene,
//     Clock,
//     Box3,
//     Vector3,
//     Color,
//   } from './three.module.js'
  import * as THREE from 'three'
  import { OrbitControls } from './OrbitControls.js'
  import { GLTFGoogleTiltBrushMaterialExtension } from './three-icosa.module.js';
  import { GLTFLoader } from './GLTFLoader.js';
  
  class Sketch {
    constructor() {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setClearColor(0x000000, 0)
  
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.camera.position.set(0, 0.95, 2)
  
      this.scene = new THREE.Scene()
      this.scene.background = new Color(0, 0, 0);
  
      this.canvas = null
  
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableDamping = true
  
      this.clock = new THREE.Clock()
  
      this.resize()
      this.init()
    }
  
    init() {
      this.addCanvas()
      this.addEvents()
      this.addElements()
      this.render()
    }
  
    addCanvas() {
      this.canvas = this.renderer.domElement
      document.body.appendChild(this.canvas)
    }
  
    addEvents() {
      window.addEventListener('resize', this.resize.bind(this))
    }
  
    addElements() {
      const gltfLoader = new GLTFLoader()
      gltfLoader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../extras/brushes'));
      gltfLoader.load( 'model.glb', ( tiltData ) => {
        this.mesh = tiltData.scene
        this.controls.target.set(0, 0.95, 0)
        this.scene.add(this.mesh)
      });
    }
  
    resize() {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    }
  
    render() {
      this.controls.update()
      this.renderer.setAnimationLoop(this.render.bind(this))
      this.renderer.render(this.scene, this.camera)
    }
  }
  
  new Sketch()
  