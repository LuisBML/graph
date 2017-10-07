//1.- Si la palabra termina en "ar", se le quita los dos ultimos caracteres
function platzom(str){
	let translation = str;
	minus = str.toLowerCase();
	var size = str.length;


	if (minus.endsWith('ar')) {
		translation = str.slice(0, -2);
	}

//2.- Si la palabra inicia con "z", se le añada los caracteres "pe" al final
//de la palabra
	if (minus.startsWith('z')) {
		translation += 'pe';
	}

//3.- Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad
//y unir con un guion
	let mitad = Math.round(size / 2);
	if (minus.length >= 10 ) {
		primerMitad = str.slice(0, mitad);
		segundaMitad = str.slice(mitad);
		translation = primerMitad + "-" +segundaMitad;
	}

//4.- Si palabra original es un palindromo ninguna de las anteriores reglas funciona
//y se devuelve la palabra intercalando entre mayusculas y minusculas
	const reverse = (str) => str.split('').reverse().join('');

	function minMay(str){
		let translation = "";
		let capitalize = true;
		for (let i =0; i < size; i++) {
			const char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
		}
	}

	if (minus = reverse(minus)) {
		return minMay(str);
	}

	return translation;
}

console.log(platzom("contar"));
console.log(platzom("Zapato"));
console.log(platzom("Optometristas"));
console.log(platzom("anita lava la tina"));




