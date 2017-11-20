
var scene = new THREE.Scene;
const aspectRatio = window.innerWidth / window.innerHeight;
// Generar cámara
var camara = new THREE.PerspectiveCamera(
    45, // Campo de visión
    aspectRatio, // Proporcion
    0.1,
    10000 // Campo de visión
);
var lienzo = new THREE.WebGLRenderer();
lienzo.setSize(window.innerWidth,window.innerHeight);
// Añadir lienzo a la página
document.body.appendChild(lienzo.domElement);
lienzo.shadowMap.enabled = true;
lienzo.shadowMapSoft = true;
lienzo.shadowMap.type = THREE.PCFShadowMap;

//Posición cámara  
camara.position.z = 170; // Alejar cámara
camara.position.y = 30; // Elevar cámara

//Create a plane that receives shadows (but does not cast them)
let plane = new THREE.Mesh(new THREE.PlaneGeometry(200,200), new THREE.MeshPhongMaterial({color: 0x22FF11}));
plane.rotation.x += -Math.PI / 2;

plane.receiveShadow = true;


//Fijar cámara en la pirámide
//camara.lookAt(cone.position);

//Añadir cámara a la escena
//scene.add(camara);

// Lienzo encargado del renderizado

//Cubo
var geometryCube = new THREE.CubeGeometry(30,30,30);
var material = new THREE.MeshLambertMaterial({color: 0x9999FF});
var cube = new THREE.Mesh(geometryCube, material);
cube.position.set(90,30,0);
scene.add(cube);
cube.castShadow = true;

//Toroide
var geometryTorus = new THREE.TorusGeometry( 14, 4, 30, 200 );
var material = new THREE.MeshLambertMaterial({color: 0x9999FF});
var torus = new THREE.Mesh( geometryTorus, material );
torus.position.set(-50,30,0);
scene.add( torus );
torus.castShadow =  true;


//Pirámide
var geometryCone = new THREE.ConeGeometry( 20, 30, 4, 64 );
var material = new THREE.MeshLambertMaterial({color: 0x9999FF});
var cone = new THREE.Mesh( geometryCone, material );
cone.position.set(0,30,0);
scene.add(cone);
cone.castShadow =  true;

//Luz puntual en el centro de la pantalla
var light1 = new THREE.PointLight(0xff0044);
light1.position.y = 60;
light1.position.z = 20;
light1.castShadow = true;

scene.background = new THREE.Color(0xD0F4C7);

//Luz ambiental suave
var light2 = new THREE.AmbientLight( 0x404040 ); 

//Color de fondo para el lienzo
scene.add(light2);
scene.add( plane );
scene.add(light1);

let controls = new THREE.OrbitControls(camara, lienzo.domElement);

function renderizar(){
	//Rotar cubo eje y
	cube.rotation.y += .01;

	//Rotar toroide en eje x
	torus.rotation.x +=.01;

	//Rotar pirámide en eje z
	cone.rotation.z +=.01;
	
	lienzo.render(scene, camara);
		requestAnimationFrame(renderizar);

	
}
//Llamar a la función
renderizar();

