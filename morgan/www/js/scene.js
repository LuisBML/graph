let numStars = 7;
let width = 500;
let heigth = 500;

let stars = (function(star){
	let stars = [];
	for (let i = 0; i < numStars; i ++) {
		let h = i * 360 / numStars;
		stars[i] = star.clone().attr({
			fillColor: 'hsl(' + h +', 100%, 50%)',
			x: width/2,
			y: heigth/2
		});
	}
	return stars;
})(new Star(width/2, heigth/2, 1, 5));

stage.length(14);

let i = 0;
stage.on(0, function(){
	let star = stars[i];
	star.attr({
		scaleX: 1,
		scaleY: 1,
		opacity: 1
	}).addTo(stage).animate(14 * numStars, {
		scaleX: width * 3,
		scaleY: heigth * 3,
		opacity: 0
	}, {isTimeLineBound: false});

	i = (i + 1) % numStars;

	stage.removeChild(star[i]);
});
