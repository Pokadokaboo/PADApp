import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the UserAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-account',
  templateUrl: 'user-account.html',
})
export class UserAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'adminMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAccountPage');
  }

}
