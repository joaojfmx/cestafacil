import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router/';
import { AlertController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  protected email: string = "";
  protected pws: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    private googlePlus: GooglePlus,
    private device: Device,
   // public auth: AuthService
  ) { }

  ngOnInit() {
 //   console.log(this.afAuth);
//    console.log(this.device.platform);
  }

  onSubmit(form) {
    this.login();
  }



  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pws).then(
      res => {
       // this.router.navigate(["/"]);
        console.log(res);
      },
      err => {
        console.log(err);
        this.msgerror(err.code);
      }
    );

  }

  loginGoogle() {
    if (this.device.platform === 'browser')
      {this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());}
    else
      {this.loginGoogleMobile();
      }

    if (this.afAuth.user) {
      this.router.navigate(['/login']);
    }

  }

  loginGoogleMobile() {
    this.googlePlus.login({})
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  // Alertas--------------------------------
  async presentAlert(texto: string) {
    const alert = await this.alertController.create({
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }

  msgerror(error: string) {
    let texto: string;
    if (error === 'auth/wrong-password') {
      texto = "senha incorreta";
    } else if (error = 'auth/user-not-found') {
      texto = "Usuário não cadastrado";
    } else if (error = 'auth/popup-closed-by-user') {
      texto = "Usuário não cadastrado";
    } else if (error = 'auth/invalid-email') {
      texto = "Usuário não cadastrado";
    }
    this.presentAlert(texto);
  }

}

