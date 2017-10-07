var A = {x1: 3, y1: -2}

console.log ("La coordenada del punto A es: " + "(" + A.x1 + ", " + A.y1 +")");

var B = {x2: -1, y2: 4};

console.log ("La coordenada del punto B es: " + "(" + B.x2 + ", " + B.y2 +")");

function calcularDistancia(){
	const distancia = Math.sqrt(Math.pow((B.x2-A.x1) , 2) + Math.pow((B.y2 - A.y1) , 2));

	return console.log("La distancia entre los puntos A y B es: " + distancia.toFixed(2));
}

calcularDistancia();