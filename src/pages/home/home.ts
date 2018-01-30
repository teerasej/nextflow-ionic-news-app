import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { HttpClient } from '@angular/common/http/src/client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('http://localhost:8888/news/').subscribe(
      (data:any) => {     
        this.news = data;
      },
      (error) => { console.log(error) }
    );
  }

  viewDetail(newsInfo){
    this.navCtrl.push('NewsDetailPage', newsInfo);
  }

}
