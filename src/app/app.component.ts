import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Produtos',
      url: '/home',
      icon: 'Home'
    },
    {
      title: 'Carrinho',
      url: '/carrinho',
      icon: 'cart'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'code-working'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (cordova.platformId === 'android') {
         this.statusBar.backgroundColorByHexString('#580b0b');
      }
    });
  }
}
