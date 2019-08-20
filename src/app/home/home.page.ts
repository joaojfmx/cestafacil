import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LojasService } from '../services/lojas.service';
import { CarrinhoService } from '../services/carrinho.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  protected lojas$: any;
  private produto$: Observable<any>;
  private id: string;
  private selectcategory: anys;

  constructor(
    private activeRouter: ActivatedRoute,
    private lojaService: LojasService,
    private prodService: CarrinhoService,
    public toastController: ToastController
  ) {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    this.produto$ = this.prodService.get(this.id);
    this.selectcategory = "";
  }

  ngOnInit() {
    
    //  this.lojas$ = this.lojaService.getAll();
    //  console.log(this.lojas$);
  }

  addCar(i, p) {
    this.prodService.addItem(p)
  }

  // msg add carrinho

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      //  header: 'OK',
      message: 'Adicionando ao carrinho',
      position: 'bottom',
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'cart',
          //    text: 'Adicionando ao carrinho',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  grita() {
    switch (this.selectcategory) {
      case "Carrefour":
        this.selectcategory = "Carrefour";
        this.lojas$ = this.lojaService.getCarrefour();
        console.log("carre")
        break;
      case "Vianense":
        this.selectcategory = "Vianense";
        this.lojas$ = this.lojaService.getVianense();
        console.log("vianense")
        break;
      case "Guanabara":
        this.selectcategory = "Guanabara";
        this.lojas$ = this.lojaService.getGuanabra();
        console.log("Guanabara")
        break;
      case "Extra":
        this.selectcategory = "Extra";
        this.lojas$ = this.lojaService.getExtra();
        console.log("Extra")
        break;
    }
  }
}

