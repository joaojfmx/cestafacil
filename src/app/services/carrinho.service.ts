import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { AngularFireDatabase } from '@angular/fire/database';
import { Carrinho } from '../model/carrinho';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: Carrinho;

  constructor(
    private db: AngularFireDatabase
  ) { 
    if (this.carrinho == null) {
      this.carrinho = new Carrinho;
    }
   }

// produto
  save(produto: Produto) {
    return this.db.list('produtos').push(produto);
  }

  getAll() {
    return this.db.list('produtos').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }

  update(id: string, produto: Produto) {
    return this.db.list('produtos').update(id, produto);
  }

  remove(id: string) {
    return this.db.list('produtos').remove(id);
  }

  get(id: string) {
    return this.db.object('/produtos/' + id).valueChanges();
  }

// carrinho

items: Produto[] = []

  addItem(item: Produto) {
    this.items.push(item)
    sessionStorage.setItem("cart", JSON.stringify(this.items))
    console.log(this.items);
  }

  removeItem(Produto) {
    this.items.splice(this.items.indexOf(Produto), 1)
    //salva na sessão
    sessionStorage.setItem("cart", JSON.stringify(this.items))
    console.log(this.items);
  }



}
