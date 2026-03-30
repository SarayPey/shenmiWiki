import {akiko} from "./ocs.js"
const busqueda = document.querySelector('form')
const personajes = [akiko]
busqueda.addEventListener('submit', function(event) {
		event.preventDefault();
		let ocAdo = new FormData(document.getElementById("ocBus"));
		let check = ocAdo.get('busca');
		console.log(check);
		for (oc of personajes){
			console.log(oc.nombre);
			if (oc.nombre === check) {
				window.location.href(oc.pag);
			};
		}
	}
);
