import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewsInfo } from '../../data/InewsInfo';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getAllNews(){
    return this.http.get<INewsInfo[]>('http://localhost:8888/news/');
  }

}
