//El elemento canvas es generado automáticamente por el framework
//Parámetros, ancho y alto del canvas. Método de renderizado.
//Id del canvas. Null porque Phaser lo creara
var game = new Phaser.Game(1366, 768, Phaser.AUTO, null, 
    {preload: preload, create: create, update: update});


//Precarga los assets
function preload() {
    //Escala el canvas, manteniendo la relación de aspecto
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //Canvas centrado en la pantalla
    //game.scale.pageAlignHorizontally = true;
    //game.scale.pageAlignVertically = true;
    //Canvas background
    game.stage.backgroundColor = '#DF5A42';
    game.load.image('ball', 'public/bubble.png');
    game.load.image('ball2', 'public/bubble.png');

    
}

//Ejecutado una vez cuando todo está cargado y listo
function create() {
    //Inicializar Arcade Physics engine. Para una detección de colisiones entre objetos
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //Mostrar pelota en la pantalla y posicionarla en el centro
    ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
    ball2 = game.add.sprite(game.world.width*0.2, game.world.height-25, 'ball2');
    ball.scale.setTo(0.1,0.1);
    ball2.scale.setTo(0.1,0.1);
    //Habilitar Arcade Physics(colisión) para la pelota
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    game.physics.enable(ball2, Phaser.Physics.ARCADE);
    //No permitir que la bola salga de los limites del canvas
    //con la siguiente propiedad
    ball.body.velocity.set(150, 150);
    ball2.body.velocity.set(150, 150);
    ball.body.collideWorldBounds = true;
    ball2.body.collideWorldBounds = true;
    //Propiedad para hacer rebotar la pelota dentro del área del canvas
    ball.body.bounce.set(1);
    ball2.body.bounce.set(1);
    //La pelota comprobará los límites del mundo (en nuestro caso canvas) 
    //y ejecutará la función enlazada al evento onOutOfBounds.
   

};

//El código en su interior se ejecuta en cada frame
function update() {
    //Detectar colisión entre los objetos
};



