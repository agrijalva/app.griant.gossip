import { Component } from '@angular/core';
import {
    NavController,
    AlertController,
    ModalController,
    ToastController,
    LoadingController
} from 'ionic-angular';
import { modalAboutPage } from '../modal-about/modal-about';
import { HttpClient, HttpParams } from '@angular/common/http';


import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public genero: string = '';
    public edad: string = '';
    public anios: any = [];
    public webService: any = "http://gossip.griant.mx/restapi/v1/index.php";
    public loginData: any;

    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        private _http: HttpClient,
        public loadingCtrl: LoadingController) {

        if (localStorage.getItem("GOS_login") == "1") {
            this.navCtrl.setRoot(HomePage);
        }

        for (let i = 12; i <= 70; i++) {
            this.anios.push(i);
        }
    }

    private urlLogin = this.webService + '/usuario/registro/';

    login() {
        if (this.genero == '' && this.edad == '') {
            this.alert('Gossip', 'Proporciona tus credenciales');
        } else if (this.genero != '' && this.edad == '') {
            this.alert('Gossip', 'Proporciona tu genero');
        } else if (this.genero == '' && this.edad != '') {
            this.alert('Gossip', 'Proporciona tu edad');
        } else {
            let loading = this.loadingCtrl.create({
                content: '',
                spinner: 'crescent'
            });
            loading.present();
            let Params = new HttpParams;
            Params = Params.append('edad', this.edad);
            Params = Params.append('genero', this.genero);
            this._http.get(this.urlLogin, { params: Params }).subscribe(data => {
                this.loginData = data;
                if (this.loginData.success) {
                    localStorage.removeItem('userData')
                    loading.dismiss();
                    localStorage.setItem('userData', JSON.stringify(this.loginData.data[0]));
                    this.navCtrl.setRoot(HomePage);
                };
            });
        };
    };

    openModal() {
        let myModal = this.modalCtrl.create(modalAboutPage);
        myModal.present();
    };

    showToast(text: string) {
        let toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });

        toast.present(toast);
    };

    alert(title, subTitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
}
