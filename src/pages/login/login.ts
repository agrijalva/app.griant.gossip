import { Component } from '@angular/core';
// import { Device } from '@ionic-native/device';
// import { Network } from '@ionic-native/network';
// import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NavController, AlertController, ModalController, ToastController  } from 'ionic-angular';

// Imports para Http Request
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/timeout';

//import { HTTP } from '@ionic-native/http';

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
    webService: any = "http://gossip.griant.mx/restapi/v1/index.php";
    url: any = "";

  	constructor( public navCtrl: NavController,
                 public modalCtrl: ModalController, 
                 public alertCtrl: AlertController, 
                 // public http: Http, 
                 public toastCtrl: ToastController,
                 private http: Http, ){
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
            // localStorage.setItem( "GOS_login", "1" );
            // localStorage.setItem( "GOS_genero", this.genero );
            // localStorage.setItem( "GOS_edad", this.edad );
            // this.alert( 'Gossip', 'Accediendo' );
            // this.navCtrl.setRoot( HomePage );
            console.log( this.webService );
            console.log( this.edad );
            console.log( this.genero );
            console.log( this.url + "/usuario/" + "registro/?edad=" + this.edad + "&genero=" + this.genero );

            this.url = this.webService + "/usuario/" + "registro/?edad=" + this.edad + "&genero=" + this.genero;
            console.log(this.url);
            this.http.get(this.url).map(res => res.json()).subscribe(data => {
            let usuario = JSON.parse(data);
            let alert = this.alertCtrl.create({
              title: 'Login aqui',
              subTitle: usuario,
              buttons: ['Aceptar']
              });
              alert.present();

            });

            // let body = {
            //     edad: this.edad,
            //     genero: this.genero,
            // };
            // this.http.post(this.url, body, {})
            // .then(data => {
            //      this.alert( 'Then', 'Estamos en then' );
            //     let usuario = JSON.parse(data.data);
            //     if( usuario['error'] == "" ){
            //         this.alert( 'Buena', data );
            //     }else{
            //       this.alert( 'Mala', data );
            //     }
            // })
            // .catch(error => {
            //     console.log('error');
            //     this.alert( 'error', error );
            //     console.log(JSON.stringify(error));
            // });
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