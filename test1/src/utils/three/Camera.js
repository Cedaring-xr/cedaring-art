import * as THREE from 'three'
import EventEmitter from "../EventEmitter"
import Artwork from "../../pages/Artwork"
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols'


export default class Camera extends EventEmitter {
    constructor() {
        super()
        // initial setup
        this.artwork = new Artwork()
        this.sizes = this.artwork.sizes
        this.scene = this.artwork.scene
        this.canvas = this.artwork.canvas

        this.setInstance()
        this.setOrbitControls()
        this.update()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height , 0.1, 100)

        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    setOrbitControls() {
        this.controls = new THREE.OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }
    
    update() {
        this.controls.update()
    }
}
