import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the AdminDashBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-dash-board',
  templateUrl: 'admin-dash-board.html',
})
export class AdminDashBoardPage {
  activeMenu: string = 'none';

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'adminMenu');
  }

  menu1Active() {
    this.activeMenu = 'menu1';
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menu2');
  }
  menu2Active() {
    this.activeMenu = 'menu2';
    this.menuCtrl.enable(false, 'menu1');
    this.menuCtrl.enable(true, 'menu2');
  }
}

