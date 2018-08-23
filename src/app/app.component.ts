import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SigninPage } from '../pages/signin/signin';

const config = {
  apiKey: 'AIzaSyCosQQ-7Irqh936wvIoZBlsFPIZxgFdl0s',
  authDomain: 'njpchat-ea48e.firebaseapp.com',
  databaseURL: 'https://njpchat-ea48e.firebaseio.com',
  projectId: 'njpchat-ea48e',
  storageBucket: 'gs://njpchat-ea48e.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
