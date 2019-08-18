import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LojasService } from '../services/lojas.service';
import { CarrinhoService } from '../services/carrinho.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  protected lojas$: any;
  private produto$: Observable<any>;
  private id: string;

  constructor(
    private activeRouter: ActivatedRoute,
    private lojaService: LojasService,
    private prodService: CarrinhoService
  ) {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    this.produto$ = this.prodService.get(this.id);
   }

  ngOnInit() {
    this.lojas$ = this.lojaService.getAll();
  //  console.log(this.lojas$);
  }

  addCar(i, p) {
   this.prodService.addItem(p)
  }
  

}

