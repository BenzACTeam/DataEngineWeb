import { Component } from '@angular/core';
import { Site } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  menu = [

    new Site(1, 'Home',"dashboard"),
    new Site(1, 'Case List',"listcase"),
    new Site(2, 'Create Case',"createcase"),
    new Site(2, 'Detail',"detail"),
    new Site(2, 'Test',"test")
  ];
  mySite = this.menu[0];
}
