import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news = [
    {
        "title": "cum sociis natoque",
        "imageUrl": "assets/imgs/1.jpg",
        "content": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "createdDate": "2016-05-29"
    },
    {
        "title": "curabitur gravida nisi",
        "imageUrl": "assets/imgs/3.jpg",
        "content": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "createdDate": "2016-05-29"
    },
    {
        "title": "commodo",
        "imageUrl": "assets/imgs/2.jpg",
        "content": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "createdDate": "2016-05-25"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  viewDetail(newsInfo){
    this.navCtrl.push('NewsDetailPage', newsInfo);
  }

}
