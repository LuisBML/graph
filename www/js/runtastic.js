const nombre = "Luis";

const dias = [
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo"
];

function promedioCorrer(){
	const min = 5;
	const max = 15;

	return Math.round (Math.random() * (max - min)) + min;
};

let totalKms = 0;

let length = dias.length;

for (let i = 0; i < length; i++) {
	const kms = promedioCorrer();
	console.log(`El dia ${dias[i]}, ${nombre} corrió ${kms} kms`);
	totalKms += kms;
};

const promedioKms = totalKms / length;

console.log(`En promedio ${nombre} corrió ${promedioKms.toFixed(2)} kms a la semana`);