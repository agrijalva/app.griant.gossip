import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public chismes = [
		{
			hrs: 1,
			mtr: 100,
			texto: 'Ximena volvio a salir con Alexis y luego dice que no le gusta que por que está más chico que ella... si le lleva 5 años,que asalta cunas',
			gusta: 300
		},
		{
			hrs: 10,
			mtr: 300,
			texto: 'Lupita la hija de la tienda esta embarzada de arturo el de la carniceria.',
			gusta: 300
		},
		{
			hrs: 10,
			mtr: 200,
			texto: 'Ayer en el cine cerca de insurgentes encontre a Arturo con una chica que no era su novia, la llevaba de la mano.',
			gusta: 300
		},
		{
			hrs: 6,
			mtr: 500,
			texto: 'La mama de José esta teniendo sexo con el papá de Jessica.',
			gusta: 300
		},
		{
			hrs: 5,
			mtr: 100,
			texto: 'Ximena volvio a salir con Alexis y luego dice que no le gusta que por que está más chico que ella... si le lleva 5 años,que asalta cunas',
			gusta: 300
		},
	];

	constructor(public navCtrl: NavController) { }

}
