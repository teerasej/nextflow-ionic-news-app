import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  news = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    
  }

  ionViewDidEnter(){
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
