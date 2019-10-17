import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredentialsDTO } from '../../models/credentials.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredentialsDTO = {
    senha: "",
    email: ""
  }


  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  // Desabilita o menu ao entrar tela de login
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  // habilita o menu ao sair da tela de login
  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

  // ao clicar, faz a navegação para a tela de categorias
  login() {
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }



}
