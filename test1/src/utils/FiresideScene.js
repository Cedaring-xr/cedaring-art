import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"

class FiresideScene extends Component {
    componentDidMount(){
        const parameters = {
            color: 0x44bb22
        }

    // scene
        this.scene = new THREE.Scene()
        this.loader = new GLTFLoader()
        // this.gui = new lilGui.GUI({closed: true, width: 400})

    // light
        this.light = new THREE.DirectionalLight(0xffffff, 0.05)
        this.light2 = new THREE.AmbientLight(0xffffff, 0.01)
        this.light3 = new THREE.PointLight(0xffffff, 0.05)
        this.light.position.set(10, 50, 10)
        this.scene.add( this.light, this.light2)

    // helpers
        const axesHelper = new THREE.AxesHelper()
        const directLightHelper = new THREE.DirectionalLightHelper(this.light, 5)
        const ambientLightHelper = new THREE.AmbientLightProbe(this.light2, 2)
        this.scene.add(axesHelper, directLightHelper, ambientLightHelper)

    // test cube
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color: parameters.color})
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.cube.rotateOnAxis.x = 0.5


    // model loading
        this.loader.load('/models/low_poly_forest_campfire_updated.glb', (model) => {
            console.log(model)
            this.scene.add(model.scene)
        });

    // 3d font loading
    const textureLoader = new THREE.TextureLoader()
        const coloradoTexture = textureLoader.load('/extras/images/coTexture.png')
        const txtLoader = new FontLoader();
        txtLoader.load('/extras/fonts/helvetiker_regular.typeface.json', (font)=> {
            const geometryFont = new TextGeometry("Once I walked the world enchanted Through the scented woods of spring, Hand in hand with Love, in rapture Just to hear a bluebird sing.", {
                font: font,
                size: 1,
                height: 0.1,
                curveSegments: 5,  //poly count
                bevelEnabled: true,
                bevelThickness: 0.3,
                bevelSize: 0.2,
                bevelOffset: 0,
                bevelSegments: 5
            });
            const geometryFont2 = new TextGeometry("Now the lonely winds of autumn Moan about my gusty eaves, As I sit beside the fire Listening to the flying leaves.", {
                font: font,
                size: 1,
                height: 0.1,
                curveSegments: 5,  //poly count
                bevelEnabled: true,
                bevelThickness: 0.3,
                bevelSize: 0.2,
                bevelOffset: 0,
                bevelSegments: 5
            });
            const geometryFont3 = new TextGeometry("As the dying embers settle And the twilight falls apace, Through the gloom I see a vision Full of ardor, full of grace.", {
                font: font,
                size: 1,
                height: 0.1,
                curveSegments: 5,  //poly count
                bevelEnabled: true,
                bevelThickness: 0.3,
                bevelSize: 0.2,
                bevelOffset: 0,
                bevelSegments: 5
            });
            geometryFont.computeBoundingBox()
            geometryFont.center()
            const fontMaterial = new THREE.MeshBasicMaterial({
                map: coloradoTexture
            })
            const textMaterial = new THREE.MeshBasicMaterial({color: 0x666aaa});
            this.text = new THREE.Mesh(geometryFont, textMaterial);
            this.scene.add(this.text)
            this.text.position.z = 0
            this.text.position.y = 5
        });

    // gui/debug
        // this.gui.add(this.cube.position, 'x').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube.position, 'y').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube.position, 'z').min(-5).max(5).step(0.1)
        // this.gui.add(this.cube, 'visible');
        // this.gui.addColor(parameters, 'color').onChange(()=> {
        //     material.color.set(parameters.color)
        // })

    // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = -20;
        this.camera.position.y = 15;
        this.camera.position.x = -20;

    // render
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera);

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableZoom = false
    this.controls.enablePan = false

        //animation
        this.animation()
        // this.groupAnimation()
        this.renderer.render(this.scene, this.camera)

        //event listeners
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation = ()=> {
        requestAnimationFrame(this.animation);
        // this.cube.rotation.x +=0.01;
        // this.cube.rotation.y +=0.01;
        this.renderer.render(this.scene, this.camera);
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

export default FiresideScene;