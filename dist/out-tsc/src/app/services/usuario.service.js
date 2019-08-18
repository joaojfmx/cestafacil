import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
var UsuarioService = /** @class */ (function () {
    function UsuarioService(bd) {
        this.bd = bd;
    }
    UsuarioService.prototype.save = function (usuario, uid) {
        return this.bd.object("usuarios/" + uid).set(usuario);
    };
    UsuarioService.prototype.getAll = function () {
        return this.bd.list("usuarios").snapshotChanges()
            .pipe(map(function (changes) {
            return changes.map(function (c) { return (tslib_1.__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    UsuarioService.prototype.get = function (uid) {
        return this.bd.object("usuarios/" + uid).snapshotChanges();
    };
    UsuarioService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], UsuarioService);
    return UsuarioService;
}());
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map