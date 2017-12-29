import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/User/user.model';
import {Md5} from 'ts-md5/dist/md5';
import { UserListService } from '../../Service/user-list/user-list.services';

/**
 * Generated class for the CreateAccPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-acc',
  templateUrl: 'create-acc.html',
})
export class CreateAccPage {

  user: User = {
    key: '',
    name: '',
    email: '',
    password: '',
    role: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private userList: UserListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccPage');
  }

  createUserAcc(user : User) {
    //this.userList.addUser(user).then(ref => {
     // console.log(ref.key);
   // });
    
    this.userList.updateUser(user, user.key);
  }


}
