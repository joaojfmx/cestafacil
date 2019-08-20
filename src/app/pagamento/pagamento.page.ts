import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ViacepService } from '../services/viacep.service';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage {
   private cep;
   private endereco:any = {};
   vazio = "";

  constructor(
    public navCtrl: NavController,
    private viacep: ViacepService,
    public alertController: AlertController,
    private router: Router
    ) { }

  getEndereco(){
  if(this.cep.length == 8){
    this.viacep.findAddressByCep(this.cep)
    .subscribe(
      data =>{
        this.endereco = data;
        console.log(data);
        }
      );
    }
  }

  async confirmaPagamento() {
    const alert = await this.alertController.create({
      header: 'Compra Concluída!',
   //   subHeader: 'Subtitle',
      message: "A entrega será realizada no horário agendado.",
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['/']);
  }


  }

