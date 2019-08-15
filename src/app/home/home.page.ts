import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LojasService } from '../services/lojas.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  protected lojas$: any;

  constructor(
    private lojaService: LojasService
  ) { }

  ngOnInit() {
    this.lojas$ = this.lojaService.getAll();
  }

}
