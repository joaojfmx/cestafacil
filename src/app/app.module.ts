import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

//Firebase--------------------------
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
//Google-----------------------------
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Device } from '@ionic-native/device/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyCKjgbayicS_D6NOkz-Y2HffW1jOL1Kr1c",
  authDomain: "cestafacil-ae9f1.firebaseapp.com",
  databaseURL: "https://cestafacil-ae9f1.firebaseio.com",
  projectId: "cestafacil-ae9f1",
  storageBucket: "cestafacil-ae9f1.appspot.com",
  messagingSenderId: "403397323585",
  appId: "1:403397323585:web:329d88aa5e331cd4"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus,
    Device
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private menu: MenuController
    ) { }

  openFirst() {
   // this.menu.enable(true, 'first');
    this.menu.open('first');
    this.menu.toggle();
  }

}

