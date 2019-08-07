import { Component, OnInit} from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ViacepService } from '../services/viacep.service';
import { AngularFireAuth } from '@angular/fire/auth';
 import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../services/user.model';


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  
  private cep;
  private endereco:any = {};
  public usuario: Usuario;
  public conf: string;



  constructor(
    // public navCtrl: NavController,
    private viacep: ViacepService,
    private router: Router,
    public afAuth: AngularFireAuth,
    protected usuarioService: UsuarioService,
    protected alertController: AlertController,
  //  public user: Usuario,
  //  public auth: AuthService
    ) { }

  ngOnInit() {
    this.usuario = new Usuario
  }


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

onSubmit(form) {
    this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.pws)
      .then(
        res => {
          this.usuario.email = null;
          this.usuario.pws = null;
          this.usuarioService.save(this.usuario, res.user.uid);
          console.log("Cadastrado");
          this.presentAlert("Aviso!", "Usuário cadastrada.");
          this.router.navigate(['/']);
        }
        ,
        err => {
          console.log("Epá! Não foi cadastrado!" + err);
          this.presentAlert("Erro!", "Epá! Não foi cadastrado!");
        }
      ).catch(
        erros => {
          console.log("Erro ao conectar no sistema!" + erros);
          this.presentAlert("Erro!", "Erro ao conectar no sistema!");
        }
      )
  }


  // Alerts -------------------------------
  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      // subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }



}


