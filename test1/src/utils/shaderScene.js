import React, { Component } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from 'lil-gui'


class ShaderPractice extends Component {
    componentDidMount(){

        const parameters = {
            color: 0x44bb22
        }

        //scene
        this.scene = new THREE.Scene()
        this.loader = new GLTFLoader()
        this.gui = new lilGui.GUI({closed: true, width: 400})

        //shapes
        const geometry = new THREE.BoxGeometry(1,1,1)

        const material = new THREE.RawShaderMaterial({
            vertexShader: `#version 300 es
                in vec4 a_position;
                in vec3 a_normal;
                in vec4 a_color;
                in vec2 a_texcoord0;
                
                out vec4 v_color;
                out vec3 v_normal;  // Camera-space normal.
                out vec3 v_position;  // Camera-space position.
                out vec2 v_texcoord0;
                out vec3 v_light_dir_0;  // Camera-space light direction, main light.
                out vec3 v_light_dir_1;  // Camera-space light direction, other light.
                out float f_fog_coord;
                
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                uniform mat3 normalMatrix;
                uniform mat4 u_SceneLight_0_matrix;
                uniform mat4 u_SceneLight_1_matrix;
                
                void main() {
                gl_Position = projectionMatrix * modelViewMatrix * a_position;
                f_fog_coord = gl_Position.z;
                v_normal = normalMatrix * a_normal;
                v_position = (modelViewMatrix * a_position).xyz;
                v_light_dir_0 = mat3(u_SceneLight_0_matrix) * vec3(0, 0, 1);
                v_light_dir_1 = mat3(u_SceneLight_1_matrix) * vec3(0, 0, 1);
                v_color = a_color;
                v_texcoord0 = a_texcoord0;
                }
            `,
            fragmentShader: `#version 300 es
                precision mediump float;

                out vec4 fragColor;
                
                in vec4 v_color;
                in vec3 v_position;
                in vec2 v_texcoord0;
                
                uniform sampler2D u_MainTex;
                uniform float u_Cutoff;
                uniform vec3 u_fogColor;
                uniform float u_fogDensity;
                in float f_fog_coord;
                
                
                vec3 ApplyFog(vec3 color) {
                float density = (u_fogDensity / .693147) * 10.;
                
                float fogFactor = f_fog_coord * density;
                fogFactor = exp2(-fogFactor);
                fogFactor = clamp( fogFactor, 0.0, 1.0 );
                return mix(u_fogColor, color.xyz, fogFactor);
                }
                
                void main() {
                fragColor.rgb = ApplyFog(v_color.rgb);
                fragColor.a = 1.0;
                }
            `,
        })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)

        //camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.z = 5
         // focusing the camera at object
         this.camera.lookAt(this.cube.position)
       

        //scale
        this.cube.scale.x = 1
        this.cube.scale.y = 1
        this.cube.scale.z = 1

       
        //renderer
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(this.renderer.domElement)

        //animation
        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            this.controls.update()
            this.renderer.render(this.scene, this.camera)
            window.requestAnimationFrame(tick);
        }
        this.animation()
        // this.groupAnimation()
        this.renderer.render(this.scene, this.camera)

        // controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)


        //gsap animation
        // gsap.to(this.cube.position, { duration: 2, delay: 1, x: 4})
        // gsap.to(this.cube.position, { duration: 2, delay: 3, x: -4})

        //event listeners
        window.addEventListener('resize', this.handleWindowResize);
    }

    animation= ()=> {
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y +=0.01;
        this.renderer.render(this.scene, this.camera);
    }

    // groupAnimation= ()=> {
    //     requestAnimationFrame(this.groupAnimation)
    //     this.group.rotation.x +=0.01;
    //     this.renderer.render(this.scene, this.camera);
    // }

    handleWindowResize= ()=> {
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

export default ShaderPractice
