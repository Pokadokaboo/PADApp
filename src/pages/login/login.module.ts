import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AdminDashBoardPage } from '../admin-dash-board/admin-dash-board';

@NgModule({
  declarations: [
    LoginPage,
    AdminDashBoardPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
