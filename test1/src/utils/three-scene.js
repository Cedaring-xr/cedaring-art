import React, { Component } from "react";
import * as THREE from 'three';
import { MeshBasicMaterial } from "three";
import gsap from 'gsap'

class ThreeScene extends Component {
    componentDidMount(){

        //scene
        this.scene = new THREE.Scene();

        //grouping
        this.group = new THREE.Group()
        this.scene.add(this.group)

        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial({color: 0xffAAEE})
        )
        cube1.position.x = 0.8
        cube1.position.y = 0.8
        this.group.add(cube1)

        const cube2 = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial({color: 0xffbbff})
        )
        cube2.position.x = 1.2
        cube2.position.y = 1.2
        this.group.add(cube2)

        const cube3 = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial({color: 0xaa22ee})
        )
        cube3.position.x = 2
        cube3.position.y = 2
        this.group.add(cube3)

        this.group.position.z = -3

        //shapes
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        //camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
         // focusing the camera at object
         this.camera.lookAt(this.cube.position)
       

        //scale
        this.cube.scale.x = 0.5
        this.cube.scale.y = 0.7
        this.cube.scale.z = 0.1

       
        //renderer
        this.renderer = new THREE.WebGL1Renderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)

        
        this.animation();
        this.groupAnimation();
        this.renderer.render(this.scene, this.camera);


        //gsap animation
        gsap.to(this.cube.position, { duration: 2, delay: 1, x: 4})
        gsap.to(this.cube.position, { duration: 2, delay: 3, x: -4})

        //event listeners
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation= ()=> {
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y +=0.01;
        this.renderer.render(this.scene, this.camera);
    }

    groupAnimation= ()=> {
        requestAnimationFrame(this.groupAnimation)
        this.group.rotation.x +=0.01;
        this.renderer.render(this.scene, this.camera);
    }

    handleWindowResize= ()=> {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.render(this.scene, this.camera);
    }

    // cursor= ()=> {
    //     this.window.addEventListener('mousemove', (event) =>{
    //         this.cursor.x = event.clientX / sizes.width - 0.5
    //         this.cursor.y = event.clientY / sizes.height - 0.5
    //     })
    // }

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

export default ThreeScene;