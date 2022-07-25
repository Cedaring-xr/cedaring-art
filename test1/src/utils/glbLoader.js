import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"




class ModelScene extends Component {
    componentDidMount(){
        const parameters = {
            color: 0x44bb22
        }

        // scene
        this.scene = new THREE.Scene()
        this.loader = new GLTFLoader()
        this.gui = new lilGui.GUI({closed: true, width: 400})

        // light
        this.light = new THREE.DirectionalLight(0xffffff, 5)
        this.light2 = new THREE.AmbientLight(0xffffff, 10)
        this.light.position.set(10, 50, 10)
        this.scene.add(this.light, this.light2)

    // test cube
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color: parameters.color})
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.cube.rotateOnAxis.x = 0.5


    // model loading
        this.loader.register(parser => new GLTFGoogleTiltBrushMaterialExtension(parser, '../brushes'))
        this.loader.load('/models/circuitArm.glb', (model) => {
            console.log(model)
            this.scene.add(model.scene)
        });

    // gui/debug
        this.gui.add(this.cube.position, 'x').min(-5).max(5).step(0.1)
        this.gui.add(this.cube.position, 'y').min(-5).max(5).step(0.1)
        this.gui.add(this.cube.position, 'z').min(-5).max(5).step(0.1)
        this.gui.add(this.cube, 'visible');
        this.gui.addColor(parameters, 'color').onChange(()=> {
            material.color.set(parameters.color)
        })

            // let clock = new Clock();
            // let loader = new TiltLoader();
            // let updateableMeshes;
            // // Point the loader to a folder of all the brush shaders and textures.
            // loader.setBrushDirectory( './resources/brushes' );
            // loader.load( './resources/models/cyclos.glb', ( tiltData ) => {
            //     // The returned object contains two components:
            //     //  scene : Object3D. This is the model you want to place in the scene
            //     //  updateableMeshes : Mesh[]. An array of all the brush meshes that require updating. Save this to a variable.
            //     scene.add( tiltData.scene );
            //     updateableMeshes = tiltData.updateableMeshes;
            // });
            // function render() {
            //     // Pass the mesh array to the helper function for animating.
            //     if( updateableMeshes !== undefined ) {
            //         updateBrushes( updateableMeshes, clock.getElapsedTime(), camera.position );
            //     }
            //     renderer.render( scene, camera );
            // }
            // renderer.setAnimationLoop( render );


        // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = 1.2;
        this.camera.position.y = 3;
        this.camera.position.x = 0.8;
        // this.camera.lookAt(this.cube.position)


    // render
        this.renderer = new THREE.WebGL1Renderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera);

        // controls
        this.comtrols = new OrbitControls(this.camera, this.renderer.domElement)

        //animation
        this.animation()
        // this.groupAnimation()
        this.updateMeshes()
        this.renderer.render(this.scene, this.camera)

        //event listeners
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation = ()=> {
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y +=0.01;
        this.renderer.render(this.scene, this.camera);
    }

    updateMeshes = ()=> {
        
    }

    handleWindowResize = ()=> {
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

export default ModelScene;