class Personaje {
	constructor(nombre, pag, icon){
		this.nombre = nombre;
		this.pag = "./personaje/" + pag;
		this.icon = "./personaje/OCmedia/" + icon
	}
}

const akiko = new Personaje("Akiko", "Akiko/Akiko.html", "Akiko.jpg");

export {akiko};