import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Carrinho } from '../model/carrinho';
import { map } from 'rxjs/operators';
var CarrinhoService = /** @class */ (function () {
    function CarrinhoService(db) {
        this.db = db;
        // carrinho
        this.items = [];
        if (this.carrinho == null) {
            this.carrinho = new Carrinho;
        }
    }
    // produto
    CarrinhoService.prototype.save = function (produto) {
        return this.db.list('produtos').push(produto);
    };
    CarrinhoService.prototype.getAll = function () {
        return this.db.list('produtos').snapshotChanges()
            .pipe(map(function (changes) {
            return changes.map(function (c) { return (tslib_1.__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    CarrinhoService.prototype.update = function (id, produto) {
        return this.db.list('produtos').update(id, produto);
    };
    CarrinhoService.prototype.remove = function (id) {
        return this.db.list('produtos').remove(id);
    };
    CarrinhoService.prototype.get = function (id) {
        return this.db.object('/produtos/' + id).valueChanges();
    };
    CarrinhoService.prototype.addItem = function (item) {
        this.items.push(item);
        sessionStorage.setItem("cart", JSON.stringify(this.items));
        console.log(this.items);
    };
    CarrinhoService.prototype.removeItem = function (Produto) {
        this.items.splice(this.items.indexOf(Produto), 1);
        //salva na sessão
        sessionStorage.setItem("cart", JSON.stringify(this.items));
        console.log(this.items);
    };
    CarrinhoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], CarrinhoService);
    return CarrinhoService;
}());
export { CarrinhoService };
//# sourceMappingURL=carrinho.service.js.map