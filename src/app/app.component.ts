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
  constructor() { }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }



}
