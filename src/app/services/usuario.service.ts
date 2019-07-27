import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  uid: string;
  nome: string;
  email: string;
  pws: string;
  ativo: boolean = true;
  constructor() { }
}
