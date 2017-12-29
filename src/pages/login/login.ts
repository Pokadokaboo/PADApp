import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/User/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { AdminDashBoardPage } from '../admin-dash-board/admin-dash-board';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user =  {} as User; 

  constructor(private afAth : AngularFireAuth, 

    public navCtrl: NavController, public navParams: NavParams) {

  }

 async login(user: User) {
   try {
    const result =  this.afAth.auth.signInWithEmailAndPassword(user.email, user.password);
    if (result) {
      
    }
   } 
   catch (e) {
     console.error(e)
   }
 
   this.navCtrl.setRoot(AdminDashBoardPage);
 }
}
