import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  public urlBase: string;
  constructor(private carrinhoService: CarrinhoService) { }

  items(): any[]{
    return this.carrinhoService.items;
  }
  removeItem(item: any){
    this.carrinhoService.removeItem(item);
  }

  ngOnInit() {
  }

}
