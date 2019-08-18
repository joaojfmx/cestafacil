import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var ViacepService = /** @class */ (function () {
    function ViacepService(http) {
        this.http = http;
        this.API_URL = 'https://viacep.com.br/ws/';
    }
    ViacepService.prototype.findAddressByCep = function (cep) {
        return this.http.get(this.API_URL + cep + '/json/');
    };
    ViacepService.prototype.findCep = function (estado, cidade, logradouro) {
        return this.http.get(this.API_URL + estado + '/' + cidade + '/' + logradouro + '/json/');
    };
    ViacepService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ViacepService);
    return ViacepService;
}());
export { ViacepService };
//# sourceMappingURL=viacep.service.js.map