var acompañado=true;

const movie = "It";

const movieCat = "PG-15";

const edad = 12

if(movieCat==="PG-15" && edad>=15){
	console.log("Puedes ver la película " + movie)
}else if(movieCat==="PG-15" && acompañado){
	console.log("Puedes ver la película" + movie + " acompañado de un adulto")
}else{
	console.log("No puedes ver la película" + movie);
}