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

  signIn(_username, _password) {

    let data = {
      username: _username,
      password: _password
    };

    this.http.post('http://localhost:8888/news/signin', data)
      .subscribe(
      (data: any) => {
        console.log(data);

        if (data.result) {
          this.navCtrl.setRoot('FeedPage');
        } else {
          alert('Sorry, please check username and password, then try again');
        }

      },
      (error) => {
        console.log(error);
      }
      )


  }

}
