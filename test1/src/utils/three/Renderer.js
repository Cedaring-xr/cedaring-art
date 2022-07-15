import * as THREE from 'three'
import Artwork from "../../pages/Artwork";

export default class Renderer {
    constructor() {
        this.artwork = new Artwork()
        this.canvas = this.artwork.canvas
        this.sizes = this.artwork.sizes
        this.camera = this.artwork.camera
        this.scene = this.artwork.scene

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGL1Renderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math(window.devicePixelRatio, 2))
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math(window.devicePixelRatio, 2))
    }

    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
}