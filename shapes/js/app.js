var Rectangle = new Rect(50,50,100,100).fill('blue').addTo(stage);
var Square = new Rect(50,150,200,100).fill('gray').addTo(stage);
var Circle = new Circle(50,300,50).fill('brown').addTo(stage);

stage.addChild(Rectangle);
stage.addChild(Square);
stage.addChild(Circle);

