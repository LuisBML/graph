WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var lienzo = new THREE.WebGLRenderer({antialias: true});

// Lienzo encargado del renderizado
lienzo.setSize(WIDTH,HEIGHT);

// Añadir lienzo a la página
document.body.appendChild(lienzo.domElement);
lienzo.setClearColor (0xD0F4C7, 1);
var escena = new THREE.Scene;

/*var paramFunction4 = function (u, v) {
            u *= Math.PI;
            v *= 2 * Math.PI;
            u = u * 2;
            var x, y, z;
            if (u < Math.PI) {
                x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
                z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
            } else {
                x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
                z = -8 * Math.sin(u);
            }
            y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);
            return new THREE.Vector3(x, y, z);
        };*/

var geometry = new THREE.SphereGeometry( 3, 32, 32 );
var material = new THREE.MeshLambertMaterial( { color: 0x48505F } );
var sphere = new THREE.Mesh( geometry, material );
escena.add( sphere );
sphere.position.set(0,11,0);

var geometry = new THREE.ConeGeometry( 4.4,8.3,64 );
var material = new THREE.MeshLambertMaterial( { color: 0x48505F } );
var pico = new THREE.Mesh( geometry, material );
escena.add( pico );
pico.rotation.x += Math.PI;
pico.position.set(-13.5,3.1,0);

function CustomSinCurve( scale ) {

	THREE.Curve.call( this );

	this.scale = ( scale === undefined ) ? 1 : scale;

}

var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
var geometry = new THREE.LatheGeometry( points, 30, 6, 6.3 );
var material = new THREE.MeshLambertMaterial({color: 0x48505F});
var lathe = new THREE.Mesh( geometry, material );
escena.add( lathe );

var geometry = new THREE.ConeGeometry( 14, 5, 14 );
var material = new THREE.MeshLambertMaterial( {color: 0x48505F} );
var cone = new THREE.Mesh( geometry, material );
escena.add( cone );
cone.position.y = 10;

/*var geometry = new THREE.ParametricGeometry( paramFunction4, 25, 25 );
var material = new THREE.MeshLambertMaterial( { color: 0x615348 } );
var cube = new THREE.Mesh( geometry, material );
escena.add( cube );
cube.rotation.x += .9 * 2;
cube.rotation.y += -1.4;
cube.position.set(18,5,0);*/

//Manija

CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function ( t ) {

	var tx = t * 3 - 1.5;
	var ty = Math.sin( 2 * Math.PI * t );
	var tz = 0;

	return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

};

var path = new CustomSinCurve( 5 );
var geometry = new THREE.TubeGeometry( path, 100, 2, 20, false );
var material = new THREE.MeshLambertMaterial( { color: 0x48505F } );
var mesh = new THREE.Mesh( geometry, material );
escena.add( mesh );
mesh.rotation.z += Math.PI * .6;	
mesh.position.set(14,0,7);

//cup1
var geometry = new THREE.CylinderGeometry( 7, 6, 1, 64 );
var material = new THREE.MeshLambertMaterial( {color: 0x48505F} );
var cylinder = new THREE.Mesh( geometry, material );
escena.add( cylinder );
cylinder.position.set(-22,-6,0);

var geometry = new THREE.CylinderGeometry( 7, 4, 8, 64, 1, false );
var material = new THREE.MeshLambertMaterial( {color: 0xAF8E6F} );
var cup1 = new THREE.Mesh( geometry, material );
escena.add( cup1 );
cup1.position.set(-22,-2,0);

var geometry = new THREE.TorusGeometry( 2.5, .8, 30, 200, 3.7);
var material = new THREE.MeshLambertMaterial( { color: 0xAF8E6F } );
var torus = new THREE.Mesh( geometry, material );
escena.add( torus );
torus.rotation.z += Math.PI * (4/3);	
torus.position.set(-16.2,-2,0);

//cup2
var geometry = new THREE.CylinderGeometry( 7, 6, 1, 64 );
var material = new THREE.MeshLambertMaterial( {color: 0x48505F} );
var cylinder2 = new THREE.Mesh( geometry, material );
escena.add( cylinder2 );
cylinder2.position.set(-38,-6,0);

var geometry = new THREE.CylinderGeometry( 7, 4, 8, 64, 1, false );
var material = new THREE.MeshLambertMaterial( {color: 0xAF8E6F} );
var cup2 = new THREE.Mesh( geometry, material );
escena.add( cup2 );
cup2.position.set(-38,-2,0);

var geometry = new THREE.TorusGeometry( 2.5, .8, 30, 200, 3.7);
var material = new THREE.MeshLambertMaterial( { color: 0xAF8E6F } );
var torus2 = new THREE.Mesh( geometry, material );
escena.add( torus2 );
torus2.rotation.z += Math.PI * (4/3);	
torus2.position.set(-32.2,-2,0);

//cup3
var geometry = new THREE.CylinderGeometry( 7, 6, 1, 64 );
var material = new THREE.MeshLambertMaterial( {color: 0x48505F} );
var cylinder3 = new THREE.Mesh( geometry, material );
escena.add( cylinder3 );
cylinder3.position.set(29,-6,0);

var geometry = new THREE.CylinderGeometry( 7, 4, 8, 64, 1, false );
var material = new THREE.MeshLambertMaterial( {color: 0xAF8E6F} );
var cup3 = new THREE.Mesh( geometry, material );
escena.add( cup3 );
cup3.position.set(29,-2,0);

var geometry = new THREE.TorusGeometry( 2.5, .8, 30, 200, 3.7);
var material = new THREE.MeshLambertMaterial( { color: 0xAF8E6F } );
var torus3 = new THREE.Mesh( geometry, material );
escena.add( torus3 );
torus3.rotation.z += -Math.PI * 1.4;	
torus3.position.set(23.2,-2,0);

//cup4
var geometry = new THREE.CylinderGeometry( 7, 6, 1, 64 );
var material = new THREE.MeshLambertMaterial( {color: 0x48505F} );
var cylinder4 = new THREE.Mesh( geometry, material );
escena.add( cylinder4 );
cylinder4.position.set(46,-6,0);

var geometry = new THREE.CylinderGeometry( 7, 4, 8, 64, 1, false );
var material = new THREE.MeshLambertMaterial( {color: 0xAF8E6F} );
var cup4 = new THREE.Mesh( geometry, material );
escena.add( cup4 );
cup4.position.set(46,-2,0);

var geometry = new THREE.TorusGeometry( 2.5, .8, 30, 200, 3.7);
var material = new THREE.MeshLambertMaterial( { color: 0xAF8E6F } );
var torus4 = new THREE.Mesh( geometry, material );
escena.add( torus4 );
torus4.rotation.z += -Math.PI * 1.48;	
torus4.position.set(40.2,-2,0);

// Generar cámara
var camara = new THREE.PerspectiveCamera(
    45, // Campo de visión
    (WIDTH / HEIGHT), // Proporcion
    0.1,
    10000 // Campo de visión
);
  
camara.position.y = 20; // Elevar cámara
camara.position.z = 70; // Alejar cámara

camara.lookAt(lathe.position);

escena.add(camara);

var light1 = new THREE.PointLight(0x48505F);
light1.position.set(120,260,100);

var light2 = new THREE.PointLight(0x48505F);
light2.position.set(-100,100,200);

escena.add(light1);
escena.add(light2);

function renderizar(){
	//torus.rotation.z += Math.PI * 0.5 / 180;	
	lienzo.render(escena, camara);
	requestAnimationFrame(renderizar);
}
renderizar();
