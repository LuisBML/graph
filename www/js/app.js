var altura = 7;

var base = 5;

//Área rectángulo

var area = base * altura;

console.log("El área de mi rectángulo es igual: " + area);

//Área triángulo
var areaTriangulo = (base * altura) / 2;

console.log("El área de mi triángulo es igual: " + areaTriangulo);

//Volumen esfera
var radio = 4;

var volEsfera = (4/3) * Math.PI * Math.pow(radio, 3);

console.log("El volumen de mi esfera es igual: " + volEsfera);

//Imprime nombre con función
var nombre="Luis";

/////////////////////////////////////////

function imprimeNombre(){
	return console.log("Hola " + nombre);
};

imprimeNombre();

//Variable es local (dentro de la función) por eso no imprime Luis

function saludar(){
	if (true) {
		var nombre="Rust";
	}
	//Interpolar variables
	console.log(`Hola ${nombre}`);
}

saludar();

/////////////////////////////////////////

function saludar10(){
	let i =0;

	for (i=0; i<=10; i++) {
		console.log(`Hola ${nombre}`);
	}

	console.log(`El valor de i es ${i}`)
}

saludar10();
