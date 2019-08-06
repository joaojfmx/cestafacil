import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  private API_URL = 'https://viacep.com.br/ws/';

  constructor(public http: HttpClient) { }

  findAddressByCep(cep: string) {
    return this.http.get(this.API_URL + cep + '/json/');
  }
  findCep(estado: string, cidade: string, logradouro: string) {
    return this.http.get(this.API_URL + estado + '/' + cidade + '/' + logradouro + '/json/');
  }
}
