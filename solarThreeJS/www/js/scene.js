
	let scene = new THREE.Scene();

	const aspectRatio = window.innerWidth / window.innerHeight;
	let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
	let renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z = 60;
	camera.position.y = 10;

	//let mesh;
	let color = new THREE.Color( 0x212625 );
	scene.background = color;

	let loaderSun = new THREE.TextureLoader();
	loaderSun.load('public/sun.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(8, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		sun = new THREE.Mesh(geometry, material);

		sun.position.x = -10;
		scene.add(sun);
	}); 

	let loaderMercury = new THREE.TextureLoader();
	loaderMercury.load('public/mercury.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(1, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		mercury = new THREE.Mesh(geometry, material);

		mercury.position.x = -5;
		scene.add(mercury);
	});

	let loaderVenus = new THREE.TextureLoader();
	loaderVenus.load('public/venus.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(2, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		venus = new THREE.Mesh(geometry, material);

		venus.position.x = 10;
		scene.add(venus);
	});
	
	let loaderEarth = new THREE.TextureLoader();
	loaderEarth.load('public/earth.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(3, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		earth = new THREE.Mesh(geometry, material);

		earth.position.x = 17;
		scene.add(earth);
	});
	
	let loaderMars = new THREE.TextureLoader();
	loaderMars.load('public/mars.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(2, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		mars = new THREE.Mesh(geometry, material);

		mars.position.x = 25;
		scene.add(mars);
	});

	let loaderJupiter = new THREE.TextureLoader();
	loaderJupiter.load('public/jupiter.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(5, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		jupiter = new THREE.Mesh(geometry, material);

		jupiter.position.x = 35;
		scene.add(jupiter);
	});

	let loaderSaturn = new THREE.TextureLoader();
	loaderSaturn.load('public/saturn.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(4, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		saturn = new THREE.Mesh(geometry, material);

		saturn.position.x = 50;
		scene.add(saturn);
	});

	let loaderUranus = new THREE.TextureLoader();
	loaderUranus.load('public/uranus.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(2, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		uranus = new THREE.Mesh(geometry, material);

		uranus.position.x = 60;
		scene.add(uranus);
	});

	let loaderNeptune = new THREE.TextureLoader();
	loaderNeptune.load('public/neptune.jpg', function(texture){
	let geometry = new THREE.SphereGeometry(3, 100, 100)

	let material = new THREE.MeshBasicMaterial({map: texture})

		neptune = new THREE.Mesh(geometry, material);

		neptune.position.x = 70;
		scene.add(neptune);
	});


	
	function loop(){
		requestAnimationFrame(loop);
		sun.rotation.y += 0.01;
		mercury.rotation.y += 0.01;
		venus.rotation.y += 0.01;
		earth.rotation.y += 0.01;
		mars.rotation.y += 0.01;
		jupiter.rotation.y += 0.01;
		saturn.rotation.y += 0.01;
		uranus.rotation.y += 0.01;
		neptune.rotation.y += 0.01;
		renderer.render(scene, camera);
	};

	loop();
