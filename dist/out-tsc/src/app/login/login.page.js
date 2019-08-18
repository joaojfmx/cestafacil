import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router/';
import { AlertController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, router, alertController, googlePlus, device) {
        this.afAuth = afAuth;
        this.router = router;
        this.alertController = alertController;
        this.googlePlus = googlePlus;
        this.device = device;
        this.email = "";
        this.pws = "";
    }
    LoginPage.prototype.ngOnInit = function () {
        //   console.log(this.afAuth);
        //    console.log(this.device.platform);
    };
    LoginPage.prototype.onSubmit = function (form) {
        this.login();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pws).then(function (res) {
            // this.router.navigate(["/"]);
            console.log(res);
        }, function (err) {
            console.log(err);
            _this.msgerror(err.code);
        });
    };
    LoginPage.prototype.loginGoogle = function () {
        if (this.device.platform === 'browser') {
            this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        }
        else {
            this.loginGoogleMobile();
        }
        if (this.afAuth.user) {
            this.router.navigate(['/login']);
        }
    };
    LoginPage.prototype.loginGoogleMobile = function () {
        this.googlePlus.login({})
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    // Alertas--------------------------------
    LoginPage.prototype.presentAlert = function (texto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: texto,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.msgerror = function (error) {
        var texto;
        if (error === 'auth/wrong-password') {
            texto = "senha incorreta";
        }
        else if (error = 'auth/user-not-found') {
            texto = "Usuário não cadastrado";
        }
        else if (error = 'auth/popup-closed-by-user') {
            texto = "Usuário não cadastrado";
        }
        else if (error = 'auth/invalid-email') {
            texto = "Usuário não cadastrado";
        }
        this.presentAlert(texto);
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            Router,
            AlertController,
            GooglePlus,
            Device])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map