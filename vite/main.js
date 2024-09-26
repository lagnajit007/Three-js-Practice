import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//create a canvas
const canvas = document.getElementById('canvas');

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

//object_1
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

//object_2
const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({color: '#B4B4B3', emissive: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.scale.set(2,2,2);
box.position.y = -1.5;

scene.add(dodecahedron); //to add them into scene
scene.add(box);


//light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);//adding light into scene


//renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


//add orbit controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; //makes coontrolls smoother
controls.dampingFactor = 0.05; //
controls.enableZoom = true; //zoom in and out
controls.getPolarAngle = true; //Enable pan

//add animation
function  animate(){
  requestAnimationFrame(animate);

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  
  box.rotation.y += 0.005;
  
  controls.update();
  renderer.render(scene,camera);

}

//handle window resizing
window.addEventListener( 'resize', ()=> {
  
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix(); //resize the camera position
  renderer.setSize(window.innerWidth, window.innerHeight);

})

animate();
