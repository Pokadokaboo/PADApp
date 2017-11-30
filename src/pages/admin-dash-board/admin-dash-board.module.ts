import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDashBoardPage } from './admin-dash-board';
import { UserAccountPage } from '../user-account/user-account';

@NgModule({
  declarations: [
    AdminDashBoardPage
  ],
  imports: [
    IonicPageModule.forChild(AdminDashBoardPage)
  ],
})
export class AdminDashBoardPageModule {}

