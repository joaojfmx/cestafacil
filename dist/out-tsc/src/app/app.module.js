import * as tslib_1 from "tslib";
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
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
//Google-----------------------------
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Device } from '@ionic-native/device/ngx';
var AppModule = /** @class */ (function () {
    function AppModule(menu) {
        this.menu = menu;
    }
    AppModule.prototype.openFirst = function () {
        // this.menu.enable(true, 'first');
        this.menu.open('first');
        this.menu.toggle();
    };
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
                AngularFireAuthModule,
                AngularFirestoreModule,
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
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController])
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map