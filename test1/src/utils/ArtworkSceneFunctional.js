import React, { Component, useLayoutEffect } from "react"
import * as THREE from 'three'
import { GLTFGoogleTiltBrushMaterialExtension } from 'three-icosa'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap'
import * as lilGui from "lil-gui"


export default function ArtworkSceneFunctional(props) {
    console.log('card props', props)

    useLayoutEffect(() => {
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        
        renderer.setSize( window.innerWidth, window.innerHeight );
        
        document.body.appendChild( renderer.domElement );
        
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        
        scene.add( cube );
        camera.position.z = 5;
        
        const animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        };
        
        animate();
      }, []);
    
      return (
        <div>
            <h1>test</h1>
        </div>
      );

}

