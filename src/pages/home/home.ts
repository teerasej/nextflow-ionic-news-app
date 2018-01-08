import { INewsInfo } from './../../data/InewsInfo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news:INewsInfo[];

  constructor(public navCtrl: NavController, public newsProvider: NewsProvider) {
    this.newsProvider.getAllNews().subscribe(
      (data) => {     
        this.news = data;

      },
      (error) => {}
    );
  }

  viewDetail(newsInfo){
    this.navCtrl.push('NewsDetailPage', newsInfo);
  }

}
