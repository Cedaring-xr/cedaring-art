import * as THREE from 'three'
import Artwork from "../../pages/Artwork";


export default class World {
    constructor() {
        this.artwork = new Artwork()
        this.scene = this.artwork.scene

        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(2,2,2),
            new THREE.MeshBasicMaterial({
                wireframe: true
            })
        )
        this.scene.add(testMesh)
        // import environment here
        
    }
}