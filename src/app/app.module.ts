import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage } from '../pages/login/login';
import { AdmindashboardPage } from '../pages/admindashboard/admindashboard';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCQnwytBLZnSb3bgxcPezSRLV8B0ku4psc",
    authDomain: "padkrypton-35cab.firebaseapp.com",
    databaseURL: "https://padkrypton-35cab.firebaseio.com",
    projectId: "padkrypton-35cab",
    storageBucket: "padkrypton-35cab.appspot.com",
    messagingSenderId: "747590786071"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AdmindashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
