/* import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const appWindow = document.getElementById('app');
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
appWindow.body.appendChild( renderer.domElement );


loader.load('animation/scene.gltf', function (gltf) {
        scene.add(gltf.scene);
    });


    function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate ); */