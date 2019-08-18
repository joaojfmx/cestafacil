import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddUsuarioPage } from './add-usuario.page';
var routes = [
    {
        path: '',
        component: AddUsuarioPage
    }
];
var AddUsuarioPageModule = /** @class */ (function () {
    function AddUsuarioPageModule() {
    }
    AddUsuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddUsuarioPage]
        })
    ], AddUsuarioPageModule);
    return AddUsuarioPageModule;
}());
export { AddUsuarioPageModule };
//# sourceMappingURL=add-usuario.module.js.map