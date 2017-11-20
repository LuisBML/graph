var scene;
var camara;
var startTexture;

var cubeMesh;

var num = 32;

var star = new Array(num);

var spin = 0;

initializeScene();

animateScene();

function initializeScene(){
	webGLAvailable = false;
	if (Detector.webgl) {
		renderer = new THREE.WebGLRenderer({antialias: true});
		webGLAvailable = true;
	}else{
		renderer = new THREE.CanvasRenderer();
		renderer.setClearColorHex(0x000000, 1);
	}

	canvasWidth = window.innerWidth - 10;
	canvasHeight = window.innerHeight -20;

	renderer.setSize(canvasWidth, canvasHeight);

	document.getElementById("WebGLCanvas").appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camara = new THREE.PerspectiveCamara(45, canvasWidth / canvasHeight, 1, 100);
	camara.position.set(0,0,15);
	camara.lookAt(scene.position);
	scene.add(camara);

	starTexture = new THREE.ImageUtils.loadTexture("public/Star.jpg");

	for (i=0; i<num; i++) {
			var squareGeometry = new THREE.Geometry();
			squareGeometry.vertices.push(new THREE.Vector(-1, -1, 0));
			squareGeometry.vertices.push(new THREE.Vector(1, -1, 0));
			squareGeometry.vertices.push(new THREE.Vector(1, 1, 0));
			squareGeometry.vertices.push(new THREE.Vector(-1, 1, 0));
			squareGeometry.Faces.push(new THREE.Face4(0,1,2,3));
			squareGeometry.faceVertexUvs[0].push([
					new THREE.UV(0.0,0.0),
					new THREE.UV(1.0,0.0),
					new THREE.UV(1.0,1.0),
					new THREE.UV(1.0,1.0)
				]);

			var squareMaterial = new THREE.MeshBasicMaterial({
				map: startTexture,
				transparent: true,
				combine: THREE.MixOperation,
				blending: THREE.AdditiveBlending,
				color: 0xFFFFFF
			});

			var squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
			squareMesh.position.set(0.0,0.0,0.0);
			scene.add(squareMesh);

			star[i] = new Object();
			star[i].angle = 0.0;
			star[i].r = Math.random;
			star[i].g = Math.random;
			star[i].b = Math.random;
			star[i].mesh = squareMesh;

		}	
}

function animateScene(){
	requestAnimationFrame(animateScene);

	for(i=0; i<num; i++){
		spin += Math.PI * 2 / num;

		if(spin > (Math.PI*2)){
			spin = 0;
			star[i].angle += i / num;
			star[i].dist -= 0.01;
			if(star[i].dist < 0.0){
				star[i].dist += 0.5;

				star[i].r = Math.random();
				star[i].g = Math.random();
				star[i].b = Math.random();
			}
		}

		star[i].mesh.matrix.setPosition(new THREE.Vector3(star[i].dist,0,0));
		var mr = new THREE.Matrix4();
		mr.makeRotationZ(spin);
		star[i].mesh.applyMatrix(mr);

		star[i].mesh.material.color.setRGB(star[i].r, star[i].g, star[i].b);

}

}

renderer.Scene();

function rendererScene(){
	renderer.render(scene, camara);
}