new Sprite(['../public/rain.jpg'], function(err){
  if (err) return;
  this.attr({
    y: -256,
    x: -256
  });
  stage.addChild(this);
  this.animate('1s', {x: 0, y: 0, rotation: .2});
});

var audio = new bonsai.Audio([
  {src: 'http://ccmixter.org/content/doxent/doxent_-_Passing.mp3'}
]);

audio.on('load', function(){
  audio.play();
});

stage.addChild(audio);
