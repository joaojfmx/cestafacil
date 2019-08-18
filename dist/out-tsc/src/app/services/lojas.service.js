import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
var LojasService = /** @class */ (function () {
    function LojasService(bd, afs, afAuth) {
        this.bd = bd;
        this.afs = afs;
        this.afAuth = afAuth;
    }
    LojasService.prototype.getAll = function () {
        return this.afs.collection('Carrefour').snapshotChanges()
            .pipe(map(function (changes) {
            return changes.map(function (c) { return (tslib_1.__assign({ key: c.payload.doc.id }, c.payload.doc.data())); });
        }));
    };
    LojasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
            AngularFirestore,
            AngularFireAuth])
    ], LojasService);
    return LojasService;
}());
export { LojasService };
//# sourceMappingURL=lojas.service.js.map