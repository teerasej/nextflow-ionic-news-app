import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: HttpClient) {
    
  }

  signIn(username, password){

    

    this.navCtrl.push('FeedPage');
  }

}
