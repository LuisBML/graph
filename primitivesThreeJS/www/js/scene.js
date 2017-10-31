WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

// Lienzo encargado del renderizado
lienzo.setSize(WIDTH,HEIGHT);

// Añadir lienzo a la página
document.body.appendChild(lienzo.domElement);
var escena = new THREE.Scene;

//Prisma
var geometryPrisma = new THREE.CubeGeometry(100,170,100);

var apariencia = new THREE.MeshLambertMaterial({color: 0x9999FF});

var prisma = new THREE.Mesh(geometryPrisma, apariencia);


escena.add(prisma);


// Generar cámara
var camara = new THREE.PerspectiveCamera(
    45, // Campo de visión
    (WIDTH / HEIGHT), // Proporcion
    0.1,
    10000 // Campo de visión
);
  
camara.position.y = 160; // Elevar cámara
camara.position.z = 400; // Alejar cámara

camara.lookAt(prisma.position);

escena.add(camara);

var light1 = new THREE.PointLight(0xff0044);
light1.position.set(120,260,100);

var light2 = new THREE.PointLight(0x4499ff);
light2.position.set(-100,100,200);

escena.add(light1);
escena.add(light2);

x=0;
init=true;
hover=true;
function renderizar(){
	if(!hover || init){
		init=false;
		requestAnimationFrame(renderizar);
		return false;
	}
	// Rotar prisma
	prisma.rotation.y += Math.PI * 0.5 / 180;

	//Oscilar prisma
	prisma.rotation.z += Math.PI * Math.cos(x++ / 50) / 180;
	
	lienzo.render(escena, camara);
	requestAnimationFrame(renderizar);
}
renderizar();


addEventListener("mouseover",function(){hover=true;});
//Detener animación cuando el mouse salga del área
addEventListener("mouseout",function(){hover=false;});
