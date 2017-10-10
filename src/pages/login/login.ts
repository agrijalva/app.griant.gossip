import { Component } from '@angular/core';
// import { Device } from '@ionic-native/device';
// import { Network } from '@ionic-native/network';
// import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NavController, AlertController, ModalController, ToastController  } from 'ionic-angular';

// Imports para Http Request
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/timeout';

// import { PedidoPage } from '../pedido/pedido';
// import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { modalAboutPage } from '../modal-about/modal-about';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	isenabled:boolean = true;
    genero: string     = ''; // alex_9abril@hotmail.com
    edad: string  = ''; // soycliente
    socketHost:any;
    anios:any         = [];

  	constructor( public navCtrl: NavController, 
                 public modalCtrl: ModalController, 
                 public alertCtrl: AlertController, 
                 // public http: Http, 
                 public toastCtrl: ToastController ){
        // localStorage.setItem( "API_Path", "http://localhost/asesoria/restapi/v1/index.php" );
        // localStorage.setItem( "API_Path", "http://pfiscal.nutricionintegral.com.mx/asesoria/restapi/v1/index.php" );
        // localStorage.setItem( "API_Path", "http://asesorias.griant.mx/asesoria/restapi/v1/index.php" );
        // localStorage.setItem( "API_Path", "http://pfiscal.loladisenio.com.mx/restapi/v1/index.php" );
        if( localStorage.getItem( "GOS_login" ) == "1" ){
            this.navCtrl.setRoot( HomePage );
        }

        for( let i = 12; i <= 70; i++  ){
            this.anios.push( i );
        }
    }

    Login = (): void => {
        if( this.genero == '' ){
            this.alert( 'Gossip', 'Proporciona tu genero' );
        }
        else if( this.edad == '' ){
            this.alert( 'Gossip', 'Porporciona tu edad' );
        }
        else{
            localStorage.setItem( "GOS_login", "1" );
            localStorage.setItem( "GOS_genero", this.genero );
            localStorage.setItem( "GOS_edad", this.edad );
            this.alert( 'Gossip', 'Accediendo' );
            this.navCtrl.setRoot( HomePage );
        }
    }

    openModal() {
        let myModal = this.modalCtrl.create(modalAboutPage);
        myModal.present();
    }

    showToast(text: string) {
        let toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });

        toast.present(toast);
    }

    alert( title, subTitle ){
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    }
}