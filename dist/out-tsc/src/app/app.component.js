import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
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
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (cordova.platformId === 'android') {
                _this.statusBar.backgroundColorByHexString('#580b0b');
            }
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map