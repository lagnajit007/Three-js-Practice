import * as THREE from 'three';

//Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#FFFFFF');

//Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5

//add cube as object (geometry+material)
const geometry = new THREE.TorusKnotGeometry(2,0.4,100,20); //radius, tube , radial-seg, tubulur-seg
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
///////////
const geometry_2 = new THREE.SphereGeometry(); //radius, tube , radial-seg, tubulur-seg
const material_2 = new THREE.MeshLambertMaterial({color: '#FF0000', emissive: '#FF000'});

const cube_2 = new THREE.Mesh(geometry_2, material_2);
cube_2.position.set(0,0,0);
cube_2.scale.set(0.5,0.5,0.5);
scene.add(cube_2);

//Add lightning
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

//Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Animate the scene
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01; 
    renderer.render(scene, camera); 
}

animate();