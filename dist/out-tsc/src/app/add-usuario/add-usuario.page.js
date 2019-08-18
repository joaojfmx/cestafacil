import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ViacepService } from '../services/viacep.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../services/user.model';
var AddUsuarioPage = /** @class */ (function () {
    function AddUsuarioPage(
    // public navCtrl: NavController,
    viacep, router, afAuth, usuarioService, alertController) {
        this.viacep = viacep;
        this.router = router;
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.endereco = {};
    }
    AddUsuarioPage.prototype.ngOnInit = function () {
        this.usuario = new Usuario;
    };
    AddUsuarioPage.prototype.getEndereco = function () {
        var _this = this;
        if (this.cep.length == 8) {
            this.viacep.findAddressByCep(this.cep)
                .subscribe(function (data) {
                _this.endereco = data;
                console.log(data);
            });
        }
    };
    AddUsuarioPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.pws)
            .then(function (res) {
            _this.usuario.email = null;
            _this.usuario.pws = null;
            _this.usuarioService.save(_this.usuario, res.user.uid);
            console.log("Cadastrado");
            _this.presentAlert("Aviso!", "Usuário cadastrada.");
            _this.router.navigate(['/']);
        }, function (err) {
            console.log("Epá! Não foi cadastrado!" + err);
            _this.presentAlert("Erro!", "Epá! Não foi cadastrado!");
        }).catch(function (erros) {
            console.log("Erro ao conectar no sistema!" + erros);
            _this.presentAlert("Erro!", "Erro ao conectar no sistema!");
        });
    };
    // Alerts -------------------------------
    AddUsuarioPage.prototype.presentAlert = function (titulo, texto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: titulo,
                            // subHeader: 'Subtitle',
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
    AddUsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-usuario',
            templateUrl: './add-usuario.page.html',
            styleUrls: ['./add-usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ViacepService,
            Router,
            AngularFireAuth,
            UsuarioService,
            AlertController])
    ], AddUsuarioPage);
    return AddUsuarioPage;
}());
export { AddUsuarioPage };
//# sourceMappingURL=add-usuario.page.js.map