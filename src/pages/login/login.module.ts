import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AdmindashboardPage } from '../admindashboard/admindashboard';

@NgModule({
  declarations: [
    LoginPage,
    AdmindashboardPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
