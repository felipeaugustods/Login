import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Auth } from '../../providers/auth'

import { HomePage} from '../home/home'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,public auth:Auth) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  public Login(username: string, password: string )
  {
    if(username == 'admin' && password=='admin')
    {
      this.auth.auth('true')
      this.navCtrl.push(HomePage, {

      });
    }
  }
}
