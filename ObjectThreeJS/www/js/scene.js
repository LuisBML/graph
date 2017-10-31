			var container, clock;
			var camera, scene, renderer, wolf;
			init();
			animate();
			function init() {
				container = document.getElementById( 'container' );
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
				camera.position.set( 4, 5, 4 );
				camera.lookAt( new THREE.Vector3( 0, 3, 0 ) );
				scene = new THREE.Scene();
				clock = new THREE.Clock();
				// loading manager
				var loadingManager = new THREE.LoadingManager( function() {
					scene.add( wolf );
				} );
				// collada
				var loader = new THREE.ColladaLoader( loadingManager );
				loader.options.convertUpAxis = true;
				loader.load( 'public/wolf.dae', function ( collada ) {
					wolf = collada.scene;
				} );
				//
				var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
				scene.add( ambientLight );
				var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
				directionalLight.position.set( 1, 1, 0 ).normalize();
				scene.add( directionalLight );
				//
				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );		
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function animate() {
				requestAnimationFrame( animate );
				render();
			}
			function render() {
				var delta = clock.getDelta();
				if ( wolf !== undefined ) {
					wolf.rotation.z += delta * 0.5;
				}
				renderer.render( scene, camera );
			}
