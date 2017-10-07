var Rect1 = new Rect(0, 50, 100, 100).fill('red').addTo(stage);
var Rect2 = new Rect(0, 250, 100, 100).fill('green').addTo(stage);
var Rect3 = new Rect(0, 50, 100, 100).fill('blue').addTo(stage);

var move = new KeyframeAnimation('4s', {
    from: {x: 0, y: 50},
    to: {x: 700, y: 50}
}, {repeat:Infinity});

var move2 = new KeyframeAnimation('4s', {
    from: {x: 0, y: 50},
    to: {x: 700, y: 350}
}, {repeat:Infinity});

var move3 = new KeyframeAnimation('4s', {
    from: {x: 700, y: 350},
    to: {x: 0, y: 350}
}, {repeat:Infinity});

stage.addChild(Rect1);
Rect1.animate(move);
Rect1.animate('4s', {
  rotation: Math.PI*12
}, {
  easing: 'sineInOut',
  repeat: Infinity
});

stage.addChild(Rect2);
Rect2.animate(move2);
Rect2.animate('4s', {
  rotation: Math.PI*12
}, {
  easing: 'sineInOut',
  repeat: Infinity
});

stage.addChild(Rect3);
Rect3.animate(move3);
Rect3.animate('4s', {
  rotation: Math.PI*12
}, {
  easing: 'sineInOut',
  repeat: Infinity
});

