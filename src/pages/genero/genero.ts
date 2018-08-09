import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-genero',
	templateUrl: 'genero.html',
})
export class GeneroPage {

	public imageM = '../../assets/image/general/logo1.png';
	public imageH = '../../assets/image/general/logo1.png';
	public m: boolean = false;
	public h: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad GeneroPage');
	}

	switchMujer(){
		if( !this.m && !this.h ){	
			this.imageM = '../../assets/image/general/algo.jpg';
			this.imageH = '../../assets/image/general/logo1.png';
		}else if( this.m && !this.h  ){
			this.imageM = '../../assets/image/general/algo.jpg';
			this.imageH = '../../assets/image/general/logo1.png';
		}else if( !this.m && this.h ){
			this.imageM = '../../assets/image/general/algo.jpg';
			this.imageH = '../../assets/image/general/logo1.png';
		};
	};

	swicthHombre(){
		if( !this.h && !this.m ){
			this.imageH = '../../assets/image/general/algo.jpg';
			this.imageM = '../../assets/image/general/logo1.png';
		}else if( this.h && !this.m  ) {
			this.imageH = '../../assets/image/general/algo.jpg';
			this.imageM = '../../assets/image/general/logo1.png';
		}else if( !this.h && this.m ){
			this.imageH = '../../assets/image/general/algo.jpg';
			this.imageM = '../../assets/image/general/logo1.png';
		};
	};


}
