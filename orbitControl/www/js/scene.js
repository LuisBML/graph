/*Calcular orbitas*/
(function(){

    //vertex shader calcular posiciones y vertices de los primitivos
    //y el frament shader calcula el color y la posicion de los primitivos

    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 60;
    camera.position.y = 15;
    let mesh;

    let planeGeometry = new THREE.PlaneGeometry(200,900);
    planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });

    let plane = new THREE.Mesh(planeGeometry, groundMaterial);
    let loader = new THREE.TextureLoader();

    loader.load('public/map1.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20,100,100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 0;
        scene.add(mesh);
    })

    //let geometry = new THREE.BoxGeometry(10,10,10,10);

      //let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x404040);

    pointLight.position.y = 80;
    pointLight.position.z = 20;
    
    scene.background = new THREE.Color(0xeeeeee);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(plane);
    scene.add(pointLight);


    function loop(){
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }

    loop();

})();