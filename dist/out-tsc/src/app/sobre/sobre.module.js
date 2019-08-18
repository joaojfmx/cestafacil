import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SobrePage } from './sobre.page';
var routes = [
    {
        path: '',
        component: SobrePage
    }
];
var SobrePageModule = /** @class */ (function () {
    function SobrePageModule() {
    }
    SobrePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SobrePage]
        })
    ], SobrePageModule);
    return SobrePageModule;
}());
export { SobrePageModule };
//# sourceMappingURL=sobre.module.js.map