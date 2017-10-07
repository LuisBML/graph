//El elemento canvas es generado automáticamente por el framework
//Parámetros, ancho y alto del canvas. Método de renderizado.
//Id del canvas. Null porque Phaser lo creara
var game = new Phaser.Game(680, 600, Phaser.AUTO, null, 
    {preload: preload, create: create, update: update});

var ball;
var paddle;
//bricks se utilizará para crear un grupo 
//newBrick será un nuevo objeto agregado al grupo en cada iteración del bucle
//brickInfo almacenará todos los datos necesarios
var bricks;
var newBrick;
var brickInfo;
var scoreText;
var score = 0;
var lives = 3;
var livesText;
var lifeLostText;
var playing = false;
var startButton;

//Precarga los assets
function preload() {
    //Escala el canvas, manteniendo la relación de aspecto
    //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //Canvas centrado en la pantalla
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    //Canvas background
    game.stage.backgroundColor = '#DF5A42';
    game.load.image('ball', 'public/imgs/ball.png');
    //Cargar imagen de la paleta
    game.load.image('paddle', 'public/imgs/bat.png');
    //Cargar imagen del ladrillo
    game.load.image('brick', 'public/imgs/brick3.png');
    //Cargar sprites
    //game.load.spritesheet('ball','imgs/ball2.png',20,20);
    //game.load.spritesheet('button','imgs/ol.png',120,40);
    game.load.image('button', 'public/imgs/next.png', 111, 50);
}

//Ejecutado una vez cuando todo está cargado y listo
function create() {
    //Inicializar Arcade Physics engine. Para una detección de colisiones entre objetos
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //Desactivar colisión con el borde inferior del canvas
    game.physics.arcade.checkCollision.down = false;
    //Mostrar pelota en la pantalla y posicionarla en el centro
    ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
    ball.scale.setTo(0.5,0.5);
    //ball.width = 32.1;ball.height = 32.4;
    //Para añadir una animación al objeto usamos el método animations.
    //El cual contiene el nombre de la animación. 
    //Una matriz que define el orden en el que se muestran los frames durante la animación
    //El framerate, en fps
    //ball.animations.add('wobble', [0,1,0,2,0,1,0,2,0], 24);
    //Fijar el ancla en el centro de la pelota
    ball.anchor.set(0.5);
    //Habilitar Arcade Physics(colisión) para la pelota
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    //No permitir que la bola salga de los limites del canvas
    //con la siguiente propiedad
    ball.body.collideWorldBounds = true;
    //Propiedad para hacer rebotar la pelota dentro del área del canvas
    ball.body.bounce.set(1);
    //La pelota comprobará los límites del mundo (en nuestro caso canvas) 
    //y ejecutará la función enlazada al evento onOutOfBounds.
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(ballLeaveScreen, this);

    //Mostrar paleta. world.width y world.heigh para posicionarla
    paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
    paddle.scale.setTo(0.5,0.5);
    //Posicionar el ancla de la paleta en medio de ella; para que quede centrada
    paddle.anchor.set(0.5,1);
    //Habilitar Arcade Physics para la pelota
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    //Evitar que la paleta se salga del canvas cuando la pelota, choque con ella
    paddle.body.immovable = true;

    initBricks();

    textStyle = { font: '28px Arial', fill: 'white' };
    //Añade texto. 1eros dos parámetros coordenadas, texto y estilo(letra y color)
    scoreText = game.add.text(5, 5, 'Points: ' +score, textStyle);
    livesText = game.add.text(game.world.width-5, 5, 'Lives: '+lives, textStyle);
    livesText.anchor.set(1,0);
    lifeLostText = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Life lost, click to continue', textStyle);
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;

    //Añadir botón para iniciar el juego
    //Últimos 3 parámetros. Función aue se ejecutar al pulsar el botón.
    //Especificar el contexto de la ejecución. Los frames que se utlizarán
    startButton = game.add.button(game.world.width*0.5, game.world.height*0.5, 'button', startGame, this);
    startButton.anchor.set(0.5);
};

//El código en su interior se ejecuta en cada frame
function update() {
    //Detectar colisión entre los objetos
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    //Función ballHitBrick se ejecuta cuando ocurre una colisión entre los objetos
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
    //Establecer la posición de la paleta(eje x) con el dispositivo de entrada del sistema;
    //mouse, touchpad, e inicializar la posición de la paleta, en el centro.
     if(playing) {
        paddle.x = game.input.x || game.world.width*0.5;
    }

};

//Función para crear los ladrillos
function initBricks() {
    //Objeto brickInfo contiene las propiedades de los ladrillos
    brickInfo = {
        width: 90,
        height: 40,
        count: {
            row: 6,
            col: 5
        },
        offset: {
            top: 80,
            left: 90
        },
        padding: 10
    }

    //Agregar un grupo vacío para agrupar los ladrillos
    bricks = game.add.group();

    //Crear un nuevo ladrillo y añadirlo al grupo
    for(c=0; c<brickInfo.count.col; c++) {
        for(r=0; r<brickInfo.count.row; r++) {
            //Coordenadas para definir la posición de cada ladrillo
            var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
            var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;

            newBrick = game.add.sprite(brickX, brickY, 'brick');
            game.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    }
};

function ballHitBrick(ball, brick) {
    //Añadir un tween, para hacer que los ladrillos desaparezcan cuando son golpeados
    //Ancho y altura escalan a cero
    var killTween = game.add.tween(brick.scale);
    //El método to() define el estado final del objeto
    killTween.to({x:0,y:0}, 200, Phaser.Easing.Linear.None);
    killTween.onComplete.addOnce(function(){
        //Remover el ladrillo de la pantalla con el método kill
        brick.kill();
    }, this);
    killTween.start();

    //Aumentar el score y actualizar texto
    score += 10;
    scoreText.setText('Points: ' +score);

    var count_alive = 0;
    //Verificar ladrillos vivos
    for (i = 0; i < bricks.children.length; i++) {
      if (bricks.children[i].alive == true) {
        count_alive++;
      }
    }
    //Si no quedan más ladrillos vivos, entonces mostramos un mensaje
    if (count_alive == 0) {
      alert('You won the game, you´re a monster!');
      location.reload();
    }
};

function ballLeaveScreen() {
    lives--;
    //Comprobar si es un valor distinto de cero. 
    //Si es así, puede seguir jugando. Sino aparece la alerta
    if(lives) {
        livesText.setText('Lives: '+lives);
        lifeLostText.visible = true;
        ball.reset(game.world.width*0.5, game.world.height-25);
        paddle.reset(game.world.width*0.5, game.world.height-5);
        game.input.onDown.addOnce(function(){
            lifeLostText.visible = false;
            ball.body.velocity.set(150, -150);
        }, this);
    }
    else {
        alert('Game Over!');
        location.reload();
    }
};

function ballHitPaddle(ball, paddle) {
    ball.animations.play('wobble');
    //Rebotes aleatorios
    ball.body.velocity.x = -1*5*(paddle.x-ball.x);
};

function startGame() {
    //Cuando el botón es presionado, se remueve
    startButton.destroy();
    //Establecer velocidad para el movimiento de la bola
    ball.body.velocity.set(150, -150);
    playing = true;
};
