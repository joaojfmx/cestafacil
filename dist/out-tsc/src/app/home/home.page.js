import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LojasService } from '../services/lojas.service';
import { CarrinhoService } from '../services/carrinho.service';
import { ActivatedRoute } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(activeRouter, lojaService, prodService) {
        this.activeRouter = activeRouter;
        this.lojaService = lojaService;
        this.prodService = prodService;
        this.id = this.activeRouter.snapshot.paramMap.get('id');
        this.produto$ = this.prodService.get(this.id);
    }
    HomePage.prototype.ngOnInit = function () {
        this.lojas$ = this.lojaService.getAll();
        //  console.log(this.lojas$);
    };
    HomePage.prototype.addCar = function (i, p) {
        this.prodService.addItem(p);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            LojasService,
            CarrinhoService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map