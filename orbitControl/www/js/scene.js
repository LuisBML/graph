/*Calcular orbitas*/


    //vertex shader calcular posiciones y vertices de los primitivos
    //y el frament shader calcula el color y la posicion de los primitivos

    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    camera.position.z = 60;
    camera.position.y = 15;

    let plane = new THREE.Mesh(new THREE.PlaneGeometry(200,900), new THREE.MeshPhongMaterial({color: 0xffffff}));

    plane.rotation.x += -Math.PI / 2;

    plane.receiveShadow = true;

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
cone.position.set(15,30,0);
scene.add(cone);
cone.castShadow =  true;


    let pointLight = new THREE.PointLight(0x606060);

    pointLight.position.y = 60;
    pointLight.position.z = 20;

    pointLight.castShadow = true;
    
    scene.background = new THREE.Color(0xD0F4C7);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(plane);
    scene.add(pointLight);

    let controls = new THREE.OrbitControls(camera, renderer.domElement);

    function loop(){
        requestAnimationFrame(loop);
        cube.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        cone.rotation.z += 0.01;
        renderer.render(scene, camera);
    }

    loop();

