import { Component } from '@angular/core';
import { Site } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = '站点列表';
  menu = [

    new Site(2, 'Google',"listcase"),
    new Site(3, 'Taobao',"dashboard"),
    new Site(4, 'Facebook',"createcase")
  ];

  mySite = this.menu[0];
}
